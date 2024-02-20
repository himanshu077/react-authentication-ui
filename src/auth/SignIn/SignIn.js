import { Box, Typography } from "@mui/material";
import React from "react";
import Authonicate from "../../layout/Authonicate";
import SideImage from "../../common/SideImage/SideImage";

const SignIn = () => {
  const LeftContent = () => {
    return (
      <>
        <SideImage className="object-bottom" />
      </>
    );
  };

  const RightContent = () => {
    return (
      <>
        <Box>
          <Typography
            variant="h3"
            className="!bg-green-600 !text-white !font-bold text-2xl p-10"
          >
            Sign In Page
          </Typography>
        </Box>
      </>
    );
  };
  return (
    <Authonicate
      LeftContent={<LeftContent />}
      RightContent={<RightContent />}
    />
  );
};

export default SignIn;
