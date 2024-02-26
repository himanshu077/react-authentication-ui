import Authenticate from "../../layout/Authenticate";
import React from "react";
import ResetContent from "../../components/ResetContent/ResetContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const ResetPassword = () => {
  return (
    <>
      <Authenticate
        LeftContent={<LeftSignUpContent />}
        RightContent={<ResetContent />}
      />
    </>
  );
};

export default ResetPassword;
