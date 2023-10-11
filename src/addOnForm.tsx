import React, { useEffect, useState } from "react";

interface FormProps {
  onNext: (data: {
    useOnlineService: boolean;
    useLargeStorage: boolean;
    useCustomProfiles: boolean;
  }) => void;
  onBack: () => void;
  addOnData: { planType: string; planIsMonth: boolean } | null;
}

const AddOnForm: React.FC<FormProps> = ({ onNext, onBack, addOnData }) => {
  const [formData, setFormData] = useState({
    useOnlineService: false,
    useLargeStorage: false,
    useCustomProfiles: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  const handleBack = () => {
    setFormData({
      useOnlineService: false,
      useLargeStorage: false,
      useCustomProfiles: false,
    });
    onBack();
  };

  const onlineCost = () => {
    if (addOnData?.planIsMonth === true) {
      return <p className="monthsFree">+$1/mo</p>;
    } else {
      return <p className="monthsFree">+$10/yr</p>;
    }
  };

  const storageCost = () => {
    if (addOnData?.planIsMonth === true) {
      return <p className="monthsFree">+$2/mo</p>;
    } else {
      return <p className="monthsFree">+$20/yr</p>;
    }
  };

  const profileCost = () => {
    if (addOnData?.planIsMonth === true) {
      return <p className="monthsFree">+$2/mo</p>;
    } else {
      return <p className="monthsFree">+$12/yr</p>;
    }
  };

  return (
    <form>
      <h1>Pick add-ons</h1>
      <p className="formText">Add-ons help enhance your gaming experience.</p>

      <div className="addon-main">
        <label
          className={`addon-form-box ${
            formData.useOnlineService ? "form-box-active" : ""
          }`}
        >
          <input
            type="checkbox"
            className="addOnInput"
            name="useOnlineService"
            onChange={handleChange}
          ></input>
          <div className="addon-container-text">
            <p className="form-box-text">Online service</p>
            <p>Access to multiplayer games</p>
          </div>
          {onlineCost()}
        </label>
        <label
          className={`addon-form-box ${
            formData.useLargeStorage ? "form-box-active" : ""
          }`}
        >
          <input
            type="checkbox"
            className="addOnInput"
            name="useLargeStorage"
            onChange={handleChange}
          ></input>
          <div className="addon-container-text">
            <p className="form-box-text">Larger storage</p>
            <p>Extra 1TB of cloud space</p>
          </div>
          {storageCost()}
        </label>
        <label
          className={`addon-form-box ${
            formData.useCustomProfiles ? "form-box-active" : ""
          }`}
        >
          <input
            type="checkbox"
            className="addOnInput"
            name="useCustomProfiles"
            onChange={handleChange}
          ></input>
          <div className="addon-container-text">
            <p className="form-box-text">Customizable profile</p>
            <p>Custom theme on your profile</p>
          </div>
          {profileCost()}
        </label>
      </div>
      <div className="form-footer">
        <button className="back-button" type="button" onClick={handleBack}>
          Go Back
        </button>
        <button className="next-button" type="button" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </form>
  );
};

export default AddOnForm;
