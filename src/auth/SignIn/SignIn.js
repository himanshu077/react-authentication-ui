import React from "react";
import Authenticate from "../../layout/Authenticate";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";
import LoginRightContent from "../../components/LoginRightContent/LoginRightContent";
// import LoginRightContent from "@/components/LoginRightContent/LoginRightContent";
// import LeftSignUpContent from "@/components/LeftSignUpContent/LeftSignUpContent";

const SignIn = () => {
  return (
    <Authenticate
      LeftContent={<LeftSignUpContent />}
      RightContent={<LoginRightContent />}
    />
  );
};

export default SignIn;
