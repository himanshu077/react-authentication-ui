import Authenticate from "../../layout/Authenticate";
import React from "react";
import VerifyEmailContent from "../../components/VerifyEmailContent/VerifyEmailContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const VerifyEmail = () => {
  return (
    <>
      <Authenticate
        LeftContent={<LeftSignUpContent />}
        RightContent={<VerifyEmailContent />}
      />
    </>
  );
};

export default VerifyEmail;
