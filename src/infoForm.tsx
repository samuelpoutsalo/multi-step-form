import React, { useState } from "react";

interface FormProps {
  onNext: (data: { username: string; email: string; number: string }) => void;
}

const InfoForm: React.FC<FormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
  });
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailPattern.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
    if (name === "number") {
      const numberPattern = /^[0-9]{10}$/;
      if (!numberPattern.test(value)) {
        setNumberError("Please enter a valid 10-digit phone number.");
      } else {
        setNumberError("");
      }
    }
  };

  const handleNext = () => {
    if (emailError || numberError) {
      // Do not proceed if there are validation errors
      return;
    }
    onNext(formData);
  };

  return (
    <form>
      <h1>Personal info</h1>
      <p className="formText">
        Please provide your name, email address and phone number.
      </p>

      <div className="form-main">
        <div className="info-form-box">
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            placeholder="e.g Stephen King"
            onChange={handleChange}
          />
        </div>
        <div className="info-form-box">
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="info-form-box">
          <label htmlFor="number">Phone number:</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            required
            name="number"
            placeholder="e.g. 050 113 0412"
            onChange={handleChange}
          />
          {numberError && <p className="error-message">{numberError}</p>}
        </div>
      </div>
      <div className="footer-buttons">
        <button type="button" onClick={handleNext} className="next-button">
          Next Step
        </button>
      </div>
    </form>
  );
};

export default InfoForm;
