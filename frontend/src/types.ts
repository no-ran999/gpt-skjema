
export interface ContactInformation {
    full_name: string;
    phone_number: string;
    email: string;
}

export interface ApplicationForCustomsCredit {
    organization_number: string;
    company_name: string;
    contact_information: ContactInformation;
    department_application: string;
    account_number: string;
    desired_credit_limit: number | null;
    attachments: {
        required: boolean;
        notes: string;
    };
}

export interface SubmissionConfirmation {
    submission_date: string;
    response_due: string;
}

export interface AppState {
    application: ApplicationForCustomsCredit;
    confirmation: SubmissionConfirmation;
}
