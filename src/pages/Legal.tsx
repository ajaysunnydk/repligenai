import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LegalProps {
  onNavigate: (page: string) => void;
}

function LegalLayout({
  onNavigate,
  title,
  updated,
  children,
}: LegalProps & { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-40 pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-sm text-slate-500 mb-14">Last updated: {updated}</p>

          <div className="space-y-10 text-slate-400 leading-relaxed [&_h2]:text-xl [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mt-3">
            {children}
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export function Privacy({ onNavigate }: LegalProps) {
  return (
    <LegalLayout onNavigate={onNavigate} title="Privacy Policy" updated="July 9, 2026">
      <section>
        <h2>Overview</h2>
        <p>
          RepligenAI ("we," "us," or "our") respects your privacy. This policy describes what
          information we collect through repligenai.net, how we use it, and the choices you have.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We collect information you voluntarily provide to us, including:</p>
        <ul>
          <li>Contact details submitted through our contact form (name, organization, email address, and message content)</li>
          <li>Information submitted with career applications (name, contact details, and professional background)</li>
          <li>Correspondence when you email or call us</li>
        </ul>
        <p className="mt-3">
          We do not use advertising trackers and we do not sell personal information to third parties.
        </p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries and provide requested staffing or consulting services</li>
          <li>To evaluate career applications and communicate about opportunities</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Service Providers</h2>
        <p>
          Form submissions are processed by trusted third-party services on our behalf. These
          providers process your data only as needed to deliver your message to us and are not
          permitted to use it for other purposes.
        </p>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>
          We retain inquiry and application data only as long as necessary for the purposes
          described above or as required by law. You may request deletion of your data at any time.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information by
          contacting us at{" "}
          <a href="mailto:info@repligenai.net" className="text-brand-400 hover:text-brand-300">
            info@repligenai.net
          </a>
          . We will respond to verified requests within a reasonable timeframe.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          RepligenAI<br />
          8101 College Blvd.<br />
          Overland Park, KS 66210, USA<br />
          +1 (913) 448-7265
        </p>
      </section>
    </LegalLayout>
  );
}

export function Terms({ onNavigate }: LegalProps) {
  return (
    <LegalLayout onNavigate={onNavigate} title="Terms of Service" updated="July 9, 2026">
      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing repligenai.net, you agree to these Terms of Service. If you do not agree,
          please do not use this website.
        </p>
      </section>

      <section>
        <h2>Use of the Website</h2>
        <p>
          This website and its content are provided for informational purposes about RepligenAI's
          staffing, consulting, and product offerings. You agree not to misuse the site, attempt to
          gain unauthorized access to its systems, or use it in any way that violates applicable law.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and product names such as
          TalentLens, QueryPilot, PipeWatch, and BenchBoard — is the property of RepligenAI and may
          not be reproduced without written permission.
        </p>
      </section>

      <section>
        <h2>No Professional Advice</h2>
        <p>
          Content on this site is general information and does not constitute professional,
          legal, or financial advice. Engagements with RepligenAI are governed by separately
          executed service agreements.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          This website is provided "as is" without warranties of any kind. To the maximum extent
          permitted by law, RepligenAI shall not be liable for any damages arising from your use of
          this website.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the website after changes
          constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a href="mailto:info@repligenai.net" className="text-brand-400 hover:text-brand-300">
            info@repligenai.net
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
