import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { inputLabelClasses } from "@mui/material/InputLabel";
import Google from "../../assets/svg/Google.svg";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import DividerLine from "../../common/DividerLine/DividerLine";

const LoginRightContent = () => {
  return (
    <>
      <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto ">
        <Box>
          <Typography
            variant="inherit"
            className=" !text-[--black] !font-bold !text-[32px]"
          >
            Welcome Back
          </Typography>
          <Typography className=" !text-[--black] w-full lg:!text-base !text-xs  !mb-6">
            Don’t have an account?
            <Link to="/">
              <span className="text-[--primary]">&nbsp;Sign Up </span>
            </Link>
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
                padding: "12px",
              },
            }}
          />

          <TextField
            fullWidth
            size="small"
            autoComplete="off"
            placeholder="Password"
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
                padding: "12px",
              },
            }}
            type="password"
          />
        </Box>

        <Typography
          variant="inherit"
          className=" !text-[--primary] !pt-5 !text-right !pb-2 !text-[14px] inter400 "
        >
          Forgot Password
        </Typography>

        <Box className="!mt-5">
          <PrimaryButton buttonName="Login" className="!py-4 !w-full" />
        </Box>

        <DividerLine />
        <Box className="!grid !gap-5">
          <Button
            variant="outlined"
            className="!py-[15px] !text-[--black] !flex !gap-2 !items-center !text-base !font-bold !capitalize !rounded-md !border-2 !border-black"
          >
            <img
              alt="SideImage"
              src={Google}
              className="!w-auto !h-auto !relative !bottom-[2px]"
            />{" "}
            Continue with Google
          </Button>
          <Button
            variant="outlined"
            className="!py-[15px] !text-[--black] !flex !gap-2 !items-center !text-base !font-bold !capitalize !rounded-md !border-2 !border-black"
          >
            Continue with Apple
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginRightContent;
