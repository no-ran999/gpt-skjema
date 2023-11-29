import React from 'react';

interface KontaktInformasjonProps {
    updateFormData: (field: string, value: any) => void;
    formData: any; // You can replace 'any' with a more specific type that represents your form data structure
}

const KontaktInformasjon: React.FC<KontaktInformasjonProps> = ({ updateFormData, formData }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData(event.target.name, event.target.value);
    };

    return (
        <div className={"form-container"}>
            <label htmlFor="contactName">Fullt navn på kontaktperson</label>
            <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName || ''}
                onChange={handleChange}
                required
            />
            {/* Other input fields */}
        </div>
    );
};

export default KontaktInformasjon;
