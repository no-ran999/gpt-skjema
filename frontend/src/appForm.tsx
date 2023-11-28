import React, { useState } from 'react';
import {ApplicationForCustomsCredit, SubmissionConfirmation} from "./types";

const ApplicationForm: React.FC = () => {
    const [application, setApplication] = useState<ApplicationForCustomsCredit>({
        organization_number: '',
        company_name: '',
        contact_information: {
            full_name: '',
            phone_number: '',
            email: ''
        },
        department_application: '',
        account_number: '',
        desired_credit_limit: null,
        attachments: {
            required: false,
            notes: ''
        }
    });

    // Handlers would go here for form changes and submission

    return (
        <form>
            {/* Form fields would go here */}
        </form>
    );
};

const Confirmation: React.FC<{ confirmation: SubmissionConfirmation }> = ({ confirmation }) => {
    return (
        <div>
            <p>Submission Date: {confirmation.submission_date}</p>
            <p>Response Due: {confirmation.response_due}</p>
        </div>
    );
};

export { ApplicationForm, Confirmation };
