import React, { useEffect, useState, useMemo } from "react";
import ThankYouPage from "./thankYouPage";

interface FormProps {
  infoData: { username: string; email: string; number: string } | null;
  planData: { planType: string; planIsMonth: boolean } | null;
  addOnData: {
    useOnlineService: boolean;
    useLargeStorage: boolean;
    useCustomProfiles: boolean;
  } | null;
  onBack: () => void;
  onNext: () => void;
}

const SumForm: React.FC<FormProps> = ({
  infoData,
  planData,
  addOnData,
  onBack,
  onNext,
}) => {
  const [onlineCost, setOnlineCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [storageCost, setStorageCost] = useState<number>(0);
  const [profileCost, setProfileCost] = useState<number>(0);
  const [planCost, setPlanCost] = useState<number>(0);

  const checkOnlineService = () => {
    if (
      addOnData?.useOnlineService === true &&
      planData?.planIsMonth === true
    ) {
      return (
        <p>
          Online service <span className="sumValueRight">+$1/mo</span>
        </p>
      );
    } else if (
      addOnData?.useOnlineService === true &&
      planData?.planIsMonth === false
    ) {
      return (
        <p>
          Online service <span className="sumValueRight">+$10/yr</span>
        </p>
      );
    }
  };

  const checkLargeStorage = () => {
    if (addOnData?.useLargeStorage === true && planData?.planIsMonth === true) {
      return (
        <p>
          Larger storage <span className="sumValueRight">+$2/mo</span>
        </p>
      );
    } else if (
      addOnData?.useLargeStorage === true &&
      planData?.planIsMonth === false
    ) {
      return (
        <p>
          Larger storage <span className="sumValueRight">+$20/yr</span>
        </p>
      );
    }
  };

  useEffect(() => {
    checkTotalCost();
  }, [planCost, onlineCost, storageCost, profileCost]);

  const checkCustomProfiles = () => {
    if (
      addOnData?.useCustomProfiles === true &&
      planData?.planIsMonth === true
    ) {
      return (
        <p>
          Custom theme on your profile{" "}
          <span className="sumValueRight">+$2/mo</span>
        </p>
      );
    } else if (
      addOnData?.useCustomProfiles === true &&
      planData?.planIsMonth === false
    ) {
      return (
        <p>
          Custom theme on your profile{" "}
          <span className="sumValueRight">+$20/yr</span>
        </p>
      );
    }
  };

  const checkPlanType = () => {
    // Monthly
    if (planData?.planIsMonth === true) {
      if (planData.planType === "arcade") {
        return (
          <div className="form-main">
            <div className="sum-main-top">
              <h2>
                {planData.planType.toUpperCase()} (Monthly){" "}
                <span className="sumValueRight2">$9/mo</span>
              </h2>
            </div>
          </div>
        );
      } else if (planData.planType === "advanced") {
        return (
          <div className="form-main">
            <h2>
              {planData.planType.toUpperCase()} (Monthly){" "}
              <span className="sumValueRight2">$12/mo</span>
            </h2>
          </div>
        );
      } else if (planData.planType === "pro") {
        return (
          <div className="form-main">
            <h2>
              {planData.planType.toUpperCase()} (Monthly){" "}
              <span className="sumValueRight2">$15/mo</span>
            </h2>
          </div>
        );
      }
    }

    // Yearly
    else if (planData?.planIsMonth === false) {
      if (planData.planType === "arcade") {
        return (
          <div className="form-main">
            <h2>
              {planData.planType.toUpperCase()} (Yearly){" "}
              <span className="sumValueRight2">$90/yr</span>
            </h2>
          </div>
        );
      } else if (planData.planType === "advanced") {
        return (
          <div className="form-main">
            <h2>
              {planData.planType.toUpperCase()} (Yearly){" "}
              <span className="sumValueRight2">$120/yr</span>
            </h2>
          </div>
        );
      } else if (planData.planType === "pro") {
        return (
          <div className="form-main">
            <h2>
              {planData.planType.toUpperCase()} (Yearly){" "}
              <span className="sumValueRight2">$150/yr</span>
            </h2>
          </div>
        );
      }
    }
  };

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onNext();
  };

  const checkTotalCost = () => {
    // Monthly
    if (planData?.planIsMonth === true) {
      if (planData.planType === "arcade") {
        setPlanCost(9);
        if (addOnData?.useOnlineService === true) {
          setOnlineCost(1);
        }
        if (addOnData?.useLargeStorage === true) {
          setStorageCost(2);
        }
        if (addOnData?.useCustomProfiles === true) {
          setProfileCost(2);
        }
        setTotalCost(planCost + onlineCost + storageCost + profileCost);
      } else if (planData.planType === "advanced") {
        setPlanCost(12);
        if (addOnData?.useOnlineService === true) {
          setOnlineCost(1);
        }
        if (addOnData?.useLargeStorage === true) {
          setStorageCost(2);
        }
        if (addOnData?.useCustomProfiles === true) {
          setProfileCost(2);
        }
        setTotalCost(planCost + onlineCost + storageCost + profileCost);
      } else if (planData.planType === "pro") {
        setPlanCost(15);
        if (addOnData?.useOnlineService === true) {
          setOnlineCost(1);
        }
        if (addOnData?.useLargeStorage === true) {
          setStorageCost(2);
        }
        if (addOnData?.useCustomProfiles === true) {
          setProfileCost(2);
        }
        setTotalCost(planCost + onlineCost + storageCost + profileCost);
      }
    }

    // Yearly
    else if (planData?.planIsMonth === false) {
      if (planData.planType === "arcade") {
        setPlanCost(90);
        if (addOnData?.useOnlineService === true) {
          setOnlineCost(10);
        }
        if (addOnData?.useLargeStorage === true) {
          setStorageCost(20);
        }
        if (addOnData?.useCustomProfiles === true) {
          setProfileCost(20);
        }
        setTotalCost(planCost + onlineCost + storageCost + profileCost);
      } else if (planData.planType === "advanced") {
        setPlanCost(120);
        if (addOnData?.useOnlineService === true) {
          setOnlineCost(10);
        }
        if (addOnData?.useLargeStorage === true) {
          setStorageCost(20);
        }
        if (addOnData?.useCustomProfiles === true) {
          setProfileCost(20);
        }
        setTotalCost(planCost + onlineCost + storageCost + profileCost);
      } else if (planData.planType === "pro") {
        setPlanCost(150);
        if (addOnData?.useOnlineService === true) {
          setOnlineCost(10);
        }
        if (addOnData?.useLargeStorage === true) {
          setStorageCost(20);
        }
        if (addOnData?.useCustomProfiles === true) {
          setProfileCost(20);
        }
        setTotalCost(planCost + onlineCost + storageCost + profileCost);
      }
    }
  };

  const checkMonthTotal = () => {
    if (planData?.planIsMonth === true) {
      return (
        <p>
          Total (per month){" "}
          <span className="sumValueRightTotal">+${totalCost}/mo</span>
        </p>
      );
    } else {
      return (
        <p>
          Total (per year){" "}
          <span className="sumValueRightTotal">+${totalCost}/yr</span>
        </p>
      );
    }
  };

  return (
    <form>
      <div className="forms">
        <h1>Finishing up</h1>
        <p className="formText">
          Double-check everything looks OK before confirming.
        </p>
        <div className="sumContainer">
          <div className="sumType">{checkPlanType()}</div>
          <div className="sumOnline">{checkOnlineService()}</div>
          <div className="sumStorage">{checkLargeStorage()}</div>
          <div className="sumProfile">{checkCustomProfiles()}</div>
        </div>
        <div className="sumTotal">{checkMonthTotal()}</div>

        <div className="form-footer">
          <button className="back-button" type="button" onClick={handleBack}>
            Go Back
          </button>
          <button className="next-button" type="button" onClick={handleNext}>
            Next Step
          </button>
        </div>
      </div>
    </form>
  );
};

export default SumForm;
