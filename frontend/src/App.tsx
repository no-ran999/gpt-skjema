import React, { useState } from 'react';
import './App.css';
import TollCreditApplicationForm from "./SoknadSkjema";
import KontaktInformasjonFelt from "./KontaktInformasjonFelt";
import SoknadSkjema from "./SoknadSkjema";
import SoknadSkjemaFortsettelse from "./SoknadSkjemaFortsettelse";


function App() {
  const [formData, setFormData] = useState({
    // Initialize your form fields here, e.g., name: '',
    fieldName: ''
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission, e.g., console.log(formData);
    console.log(formData);
  };

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <KontaktInformasjonFelt
          />
          <SoknadSkjema />
          <SoknadSkjemaFortsettelse />
          <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default App;
