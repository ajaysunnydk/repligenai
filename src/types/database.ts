export interface Database {
  public: {
    Tables: {
      applications: {
        Row: {
          id: string;
          created_at: string;
          full_name: string;
          email: string;
          phone: string | null;
          linkedin_url: string | null;
          portfolio_url: string | null;
          role_applied: string;
          location_preference: string | null;
          work_authorization: string | null;
          years_experience: number | null;
          salary_expectations: string | null;
          availability_date: string | null;
          message: string | null;
          resume_path: string | null;
          resume_mime: string | null;
          resume_size_bytes: number | null;
          consent: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          full_name: string;
          email: string;
          phone?: string | null;
          linkedin_url?: string | null;
          portfolio_url?: string | null;
          role_applied: string;
          location_preference?: string | null;
          work_authorization?: string | null;
          years_experience?: number | null;
          salary_expectations?: string | null;
          availability_date?: string | null;
          message?: string | null;
          resume_path?: string | null;
          resume_mime?: string | null;
          resume_size_bytes?: number | null;
          consent: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          full_name?: string;
          email?: string;
          phone?: string | null;
          linkedin_url?: string | null;
          portfolio_url?: string | null;
          role_applied?: string;
          location_preference?: string | null;
          work_authorization?: string | null;
          years_experience?: number | null;
          salary_expectations?: string | null;
          availability_date?: string | null;
          message?: string | null;
          resume_path?: string | null;
          resume_mime?: string | null;
          resume_size_bytes?: number | null;
          consent?: boolean;
        };
      };
    };
  };
}
