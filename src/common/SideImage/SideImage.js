import React from "react";
import SideImg from "../../assets/svg/SideImg.svg";
import { Box, CssBaseline } from "@mui/material";

const SideImage = () => {
  return (
    <Box className="flex h-screen w-full">
      <CssBaseline />
      <Box className="relative w-full">
        <img
          alt="SideImage"
          src={SideImg}
          className="w-1/2 overflow-hidden object-cover h-full fixed"
        />
      </Box>
    </Box>
  );
};

export default SideImage;
