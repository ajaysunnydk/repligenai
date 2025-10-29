import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const linkedinUrl = formData.get("linkedinUrl") as string | null;
    const portfolioUrl = formData.get("portfolioUrl") as string | null;
    const roleApplied = formData.get("roleApplied") as string;
    const locationPreference = formData.get("locationPreference") as string | null;
    const workAuthorization = formData.get("workAuthorization") as string | null;
    const yearsExperience = formData.get("yearsExperience") ? parseInt(formData.get("yearsExperience") as string) : null;
    const salaryExpectations = formData.get("salaryExpectations") as string | null;
    const availabilityDate = formData.get("availabilityDate") as string | null;
    const message = formData.get("message") as string | null;
    const consent = formData.get("consent") === "on" || formData.get("consent") === "true";
    const resume = formData.get("resume") as File | null;

    if (!fullName || !email || !roleApplied || !consent) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (resume) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(resume.type)) {
        return new Response(
          JSON.stringify({ error: "Invalid file type. Please upload PDF, DOC, or DOCX" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const maxSize = 10 * 1024 * 1024;
      if (resume.size > maxSize) {
        return new Response(
          JSON.stringify({ error: "File size exceeds 10MB limit" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    let resumePath = null;
    let resumeMime = null;
    let resumeSizeBytes = null;

    if (resume) {
      const applicationId = crypto.randomUUID();
      const fileExt = resume.name.split(".").pop();
      const fileName = `${Date.now()}-${resume.name}`;
      const storagePath = `applications/${applicationId}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("repligenai-resumes")
        .upload(storagePath, resume, {
          contentType: resume.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        return new Response(
          JSON.stringify({ error: "Failed to upload resume" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      resumePath = storagePath;
      resumeMime = resume.type;
      resumeSizeBytes = resume.size;
    }

    const { data, error: insertError } = await supabase
      .from("applications")
      .insert({
        full_name: fullName,
        email: email,
        phone: phone || null,
        linkedin_url: linkedinUrl || null,
        portfolio_url: portfolioUrl || null,
        role_applied: roleApplied,
        location_preference: locationPreference || null,
        work_authorization: workAuthorization || null,
        years_experience: yearsExperience,
        salary_expectations: salaryExpectations || null,
        availability_date: availabilityDate || null,
        message: message || null,
        resume_path: resumePath,
        resume_mime: resumeMime,
        resume_size_bytes: resumeSizeBytes,
        consent: consent,
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save application" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, applicationId: data.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});