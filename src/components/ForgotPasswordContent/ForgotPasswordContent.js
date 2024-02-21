import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
const ForgotPasswordContent = () => {
  return (
    <>
      <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto ">
        <Box>
          <Typography
            variant="inherit"
            className=" !text-[--black] !font-bold !text-[32px]"
          >
            Forgot Password
          </Typography>
          <Typography className=" !text-[--black] w-full lg:!text-base !text-xs !mb-6">
            Enter the email you used to create your account so we can send you
            instructions on how to reset your password.
          </Typography>
        </Box>

        <Box className="!grid !gap-4 !mt-16">
          <TextField
            fullWidth
            size="small"
            autoComplete="off"
            placeholder="Email"
            InputLabelProps={{
              sx: {
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "var(--black-text)",
                  fontWeight: "500",
                },
              },
            }}
            sx={{
              "& input": {
                padding: "16px",
              },
            }}
          />
        </Box>

        <Box className="!mt-7">
          <Link to="/verify-email">
            <PrimaryButton buttonName="Send" className="!py-4 !w-full" />
          </Link>
        </Box>

        <Link to="/signin">
          <Box className="!mt-7">
            <Button
              variant="outlined"
              className="!py-[15px] !w-full !text-[--black] !flex !gap-2 !items-center !text-base !font-bold !capitalize !rounded-md !border-2 !border-black"
            >
              Back to Login
            </Button>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default ForgotPasswordContent;
