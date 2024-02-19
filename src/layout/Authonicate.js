import React from "react";
import { Box } from "@mui/material";

const Authonicate = ({ LeftContent, RightContent }) => {
  return (
    <Box className="!flex !flex-row">
      <Box className="hidden md:block md:basis-1/2 overflow-hidden sm:h-screen">
        {LeftContent}
      </Box>

      <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto border-2 !border-red-600">
        {RightContent}
      </Box>
    </Box>
  );
};

export default Authonicate;
