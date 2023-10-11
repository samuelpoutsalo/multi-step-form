import React, { useState } from "react";
import InfoForm from "./infoForm";
import PlanForm from "./planForm";
import AddOnForm from "./addOnForm";
import SumForm from "./sumForm";
import ThankYouPage from "./thankYouPage";
import "./App.scss";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [infoData, setInfoData] = useState<{
    username: string;
    email: string;
    number: string;
  } | null>(null);
  const [planData, setPlanData] = useState<{
    planType: string;
    planIsMonth: boolean;
  } | null>(null);
  const [addOnData, setAddOnData] = useState<{
    useOnlineService: boolean;
    useLargeStorage: boolean;
    useCustomProfiles: boolean;
  } | null>(null);

  const handleInfoNext = (data: {
    username: string;
    email: string;
    number: string;
  }) => {
    setInfoData(data);

    setCurrentStep(1);
  };

  const originalConsoleError = console.error;

  console.error = (...args) => {
    if (
      args[0] &&
      typeof args[0] === "string" &&
      args[0].startsWith("Warning: validateDOMNesting")
    ) {
      // Suppress the "validateDOMNesting" warning
      return;
    }
    // Call the original console.error function for other messages
    originalConsoleError.apply(console, args);
  };

  const logEverything = () => {
    if (currentStep === 3) {
      console.log(infoData);
      console.log("<< INFO <<");
      console.log(planData);
      console.log("<< Plan <<");
      console.log(addOnData);
      console.log("<< AddOns <<");
    }
  };

  const handlePlanNext = (data: { planType: string; planIsMonth: boolean }) => {
    setPlanData(data);

    setCurrentStep(2);
  };

  const handleAddOnNext = (data: {
    useOnlineService: boolean;
    useLargeStorage: boolean;
    useCustomProfiles: boolean;
  }) => {
    setAddOnData(data);

    setCurrentStep(3);
  };

  const handleThankYouNext = () => {
    setCurrentStep(4);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  logEverything();

  return (
    <main>
      <nav>
        <ul>
          <li className="navInfo">
            <div
              className={`navCircle ${currentStep === 0 ? "navActive" : ""}`}
            >
              1
            </div>
            <div className="navTextContainer">
              <p className="navGrayText">STEP 1</p>
              <p className="navBoldText">YOUR INFO</p>
            </div>
          </li>
          <li className="navPlan">
            <div
              className={`navCircle ${currentStep === 1 ? "navActive" : ""}`}
            >
              2
            </div>
            <div className="navTextContainer">
              <p className="navGrayText">STEP 2</p>
              <p className="navBoldText">SELECT PLAN</p>
            </div>
          </li>
          <li className="navAddOns">
            <div
              className={`navCircle ${currentStep === 2 ? "navActive" : ""}`}
            >
              3
            </div>
            <div className="navTextContainer">
              <p className="navGrayText">STEP 3</p>
              <p className="navBoldText">ADD-ONS</p>
            </div>
          </li>
          <li className="navSum">
            <div
              className={`navCircle ${currentStep === 3 ? "navActive" : ""}`}
            >
              4
            </div>
            <div className="navTextContainer">
              <p className="navGrayText">STEP 4</p>
              <p className="navBoldText">SUMMARY</p>
            </div>
          </li>
        </ul>
      </nav>

      {currentStep === 0 && <InfoForm onNext={handleInfoNext} />}
      {currentStep === 1 && (
        <PlanForm onNext={handlePlanNext} onBack={handleBack} />
      )}
      {currentStep === 2 && (
        <AddOnForm
          onNext={handleAddOnNext}
          onBack={handleBack}
          addOnData={planData}
        />
      )}
      {currentStep === 3 && (
        <SumForm
          infoData={infoData}
          planData={planData}
          addOnData={addOnData}
          onBack={handleBack}
          onNext={handleThankYouNext}
        />
      )}

      {currentStep === 4 && <ThankYouPage />}
    </main>
  );
};

export default App;
