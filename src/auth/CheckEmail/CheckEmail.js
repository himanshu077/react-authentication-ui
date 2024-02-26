import Authenticate from "../../layout/Authenticate";
import React from "react";
import CheckEmailContent from "../../components/CheckEmailContent/CheckEmailContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const CheckEmail = () => {
  return (
    <>
      <Authenticate
        LeftContent={<LeftSignUpContent />}
        RightContent={<CheckEmailContent />}
      />
    </>
  );
};

export default CheckEmail;
