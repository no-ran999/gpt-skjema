
import React, { useState } from 'react';

interface FormData {
    contactName: string;
    phoneNumber: string;
    email: string;
    department: string;
    accountNumber: string;
    creditAmount: string;
    additionalInfo: boolean;
}

const TollCreditApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        contactName: '',
        phoneNumber: '',
        email: '',
        department: '',
        accountNumber: '',
        creditAmount: '',
        additionalInfo: false
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // @ts-ignore
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Submit logic will go here
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ...previous fields... */}
            <div className={"form-container"}>
                <label htmlFor="additionalInfo">Ønsker du å legge til vedlegg eller opplysninger?</label>
                <div>
                    <input
                        type="radio"
                        id="additionalInfoYes"
                        name="additionalInfo"
                        value="yes"
                        checked={formData.additionalInfo === true}
                        onChange={() => setFormData(prevState => ({ ...prevState, additionalInfo: true }))}
                    />
                    <label htmlFor="additionalInfoYes">Ja</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="additionalInfoNo"
                        name="additionalInfo"
                        value="no"
                        checked={formData.additionalInfo === false}
                        onChange={() => setFormData(prevState => ({ ...prevState, additionalInfo: false }))}
                    />
                    <label htmlFor="additionalInfoNo">Nei</label>
                </div>
            </div>
        </form>
    );
};

export default TollCreditApplicationForm;
