import Authenticate from "../../layout/Authenticate";
import React from "react";
import PasswordSuccessContent from "../../components/PasswordSuccessContent/PasswordSuccessContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const PasswordSuccess = () => {
  return (
    <>
      <Authenticate
        LeftContent={<LeftSignUpContent />}
        RightContent={<PasswordSuccessContent />}
      />
    </>
  );
};

export default PasswordSuccess;
