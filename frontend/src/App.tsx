import React, { useState } from 'react';
import './App.css';
import {sendForm} from "./api";
import KontaktInformasjon from "./KontaktInformasjonFelt";


function App() {
    const [formData, setFormData] = useState({
        // ... initial form data
    });

    const updateFormData = (field: any, value: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        sendForm(formData);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                // In your App component's return statement
                <KontaktInformasjon
                    updateFormData={updateFormData}
                    formData={formData}
                />
            </form>
        </div>
    );
}

export default App;