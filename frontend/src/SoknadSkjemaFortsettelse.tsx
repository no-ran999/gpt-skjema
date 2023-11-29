
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
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Submit logic will go here
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ...previous fields... */}
            <div className={"form-container"}>
                <label htmlFor="department">Søker for underavdeling</label>
                <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Velg...</option>
                    <option value="department1">Avdeling 1</option>
                    <option value="department2">Avdeling 2</option>
                    {/* Add other departments here */}
                </select>
            </div>
            <div className={"form-container"}>
                <label htmlFor="accountNumber">Kontonummer</label>
                <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{11}"
                />
            </div>
            <div className={"form-container"}>
                <label htmlFor="creditAmount">Ønsket kredittgrense</label>
                <input
                    type="number"
                    id="creditAmount"
                    name="creditAmount"
                    value={formData.creditAmount}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </form>
    );
};

export default TollCreditApplicationForm;
