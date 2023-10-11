import React, { useEffect, useState } from "react";
import thankYou from "./images/icon-thank-you.svg";

const AddOnForm = () => {
  return (
    <form className="thank">
      <img src={thankYou} alt="thankYou" />
      <h1>Thank you!</h1>
      <p className="formText">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loregaming.com.
      </p>
    </form>
  );
};

export default AddOnForm;
