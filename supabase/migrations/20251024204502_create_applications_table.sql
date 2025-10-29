/*
  # Create Applications Table for RepligenAi Careers

  ## Overview
  This migration creates the applications table to store job applications submitted through the Careers page.
  Applications include personal information, work preferences, and resume metadata.

  ## New Tables
  - `applications`
    - `id` (uuid, primary key) - Unique identifier for each application
    - `created_at` (timestamptz) - Timestamp when application was submitted
    - `full_name` (text, required) - Applicant's full name
    - `email` (text, required) - Applicant's email address
    - `phone` (text, optional) - Applicant's phone number
    - `linkedin_url` (text, optional) - URL to LinkedIn profile
    - `portfolio_url` (text, optional) - URL to portfolio or personal website
    - `role_applied` (text, required) - Position applied for
    - `location_preference` (text, optional) - Preferred work location
    - `work_authorization` (text, optional) - U.S. work authorization status
    - `years_experience` (integer, optional) - Years of relevant experience
    - `salary_expectations` (text, optional) - Expected salary range
    - `availability_date` (text, optional) - Date available to start
    - `message` (text, optional) - Additional message from applicant
    - `resume_path` (text, optional) - Storage path to uploaded resume file
    - `resume_mime` (text, optional) - MIME type of resume file
    - `resume_size_bytes` (integer, optional) - Size of resume file in bytes
    - `consent` (boolean, required) - Privacy policy consent

  ## Security
  - Enable RLS on applications table
  - No public SELECT access (applications are private)
  - Allow INSERT for authenticated and anonymous users (form submissions)
  - No UPDATE or DELETE policies (applications are immutable once submitted)

  ## Notes
  - Resume files are stored in Supabase Storage bucket 'repligenai-resumes'
  - Only resume metadata (path, MIME type, size) is stored in the database
  - Applications table has no foreign keys as it's a standalone form submission table
*/

CREATE TABLE IF NOT EXISTS public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  linkedin_url text,
  portfolio_url text,
  role_applied text NOT NULL,
  location_preference text,
  work_authorization text,
  years_experience integer,
  salary_expectations text,
  availability_date text,
  message text,
  resume_path text,
  resume_mime text,
  resume_size_bytes integer,
  consent boolean NOT NULL DEFAULT false
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert applications"
  ON public.applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
