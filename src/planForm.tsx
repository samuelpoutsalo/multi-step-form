import React, { useState } from "react";
import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";

interface FormProps {
  onNext: (data: { planType: string; planIsMonth: boolean }) => void;
  onBack: () => void;
}

const PlanForm: React.FC<FormProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    planType: "arcade",
    planIsMonth: true,
  });

  const [yearmonth, setYearmonth] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [selectedFormBox, setSelectedFormBox] = useState<string>("arcade");

  const handlePlanChange = (planName: string) => {
    setFormData((prevData) => ({ ...prevData, planType: planName }));
    setSelectedFormBox(planName);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setYearmonth(checked);
    setIsActive(checked);
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  const handleBack = () => {
    setFormData({
      planType: "",
      planIsMonth: false,
    });
    onBack();
  };

  function paymentAmount(planMode: string) {
    if (yearmonth === true && planMode === "arcadeType") {
      return <p>$9/mo</p>;
    } else if (yearmonth === false && planMode === "arcadeType") {
      return (
        <p>
          $90/yr
          <br />
          <span className="monthsFreeText">2 months free</span>
        </p>
      );
    }
    if (yearmonth === true && planMode === "advancedType") {
      return <p>$12/mo</p>;
    } else if (yearmonth === false && planMode === "advancedType") {
      return (
        <p>
          $120/yr
          <br />
          <span className="monthsFreeText">2 months free</span>
        </p>
      );
    }
    if (yearmonth === true && planMode === "proType") {
      return <p>$15/mo</p>;
    } else if (yearmonth === false && planMode === "proType") {
      return (
        <p>
          $150/yr
          <br />
          <span className="monthsFreeText">2 months free</span>
        </p>
      );
    }
  }

  return (
    <form>
      <h1>Select your plan</h1>
      <p className="formText">
        You have the option of monthly or yearly billing.
      </p>

      <div className="planform-main">
        <div
          className={`form-box ${
            selectedFormBox === "arcade" ? "form-box-active" : ""
          }`}
          onClick={() => handlePlanChange("arcade")}
        >
          <img src={arcade} alt="arcade-logo" />
          <div className="form-box-words">
            <p className="form-box-text"> Arcade</p>
            {paymentAmount("arcadeType")}
          </div>
        </div>
        <div
          className={`form-box ${
            selectedFormBox === "advanced" ? "form-box-active" : ""
          }`}
          onClick={() => handlePlanChange("advanced")}
        >
          <img src={advanced} alt="advanced-logo" />
          <div className="form-box-words">
            <p className="form-box-text"> Advanced</p>
            <p>{paymentAmount("advancedType")}</p>
          </div>
        </div>
        <div
          className={`form-box ${
            selectedFormBox === "pro" ? "form-box-active" : ""
          }`}
          onClick={() => handlePlanChange("pro")}
        >
          <img src={pro} alt="pro-logo" />
          <div className="form-box-words">
            <p className="form-box-text"> Pro</p>
            <p>{paymentAmount("proType")}</p>
          </div>
        </div>
      </div>
      <div className="form-toggle">
        <label id="month" className={isActive ? "active" : "inactive"}>
          Monthly{" "}
        </label>
        <label
          className={isActive ? "slider" : "sliderActive"}
          htmlFor="planIsMonth"
        >
          <input
            id="planIsMonth"
            type="checkbox"
            defaultChecked={true}
            name="planIsMonth"
            className="plan-button"
            onChange={handleChange}
          />
        </label>
        <label id="year" className={isActive ? "inactive" : "active"}>
          Yearly
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

export default PlanForm;
