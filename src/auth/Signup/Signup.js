// import LeftSignUpContent from "@/components/LeftSignUpContent/LeftSignUpContent";
import Authenticate from "../../layout/Authenticate";
import React from "react";
// import SignupRightContent from "@/components/SignupRightContent/SignupRightContent";
import SignupRightContent from "../../components/SignupRightContent/SignupRightContent";
import LeftSignUpContent from "../../components/LeftSignUpContent/LeftSignUpContent";

const Signup = () => {
  return (
    <>
      <Authenticate
        LeftContent={<LeftSignUpContent />}
        RightContent={<SignupRightContent />}
      />
    </>
  );
};

export default Signup;
