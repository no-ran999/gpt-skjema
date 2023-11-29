
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Submit logic will go here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={"form-container"}>
                <label htmlFor="contactName">Fullt navn på kontaktperson</label>
                <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={"form-container"}>
                <label htmlFor="phoneNumber">Telefonnummer til kontaktperson</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{8}"
                />
            </div>
            <div className={"form-container"}>
                <label htmlFor="email">E-postadresse til kontaktperson</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div >
            {/* Other form fields will follow the same pattern */}
        </form>
    );
};

export default TollCreditApplicationForm;
