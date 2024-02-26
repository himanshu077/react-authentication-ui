import Authenticate from "../../layout/Authenticate";
import React from "react";
import ForgotPasswordContent from "../../components/ForgotPasswordContent/ForgotPasswordContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const ForgotPassword = () => {
  return (
    <>
      <Authenticate
        LeftContent={<LeftSignUpContent />}
        RightContent={<ForgotPasswordContent />}
      />
    </>
  );
};

export default ForgotPassword;
