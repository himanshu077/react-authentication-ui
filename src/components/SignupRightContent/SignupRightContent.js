import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { inputLabelClasses } from "@mui/material/InputLabel";
import ControlledCheckbox from "../../common/CheckboxFill/CheckboxFill";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import Apple from "../../assets/svg/Apple.svg";
import Google from "../../assets/svg/Google.svg";
import DividerLine from "../../common/DividerLine/DividerLine";

const SignupRightContent = () => {
  return (
    <>
      <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto ">
        <Box>
          <Typography
            variant="inherit"
            className=" !text-[--black] !font-bold !text-[32px]"
          >
            Create account
          </Typography>
          <Typography className=" !text-[--black] w-full lg:!text-base !text-xs  !mb-6">
            Already have an account?
            <Link to="/signin">
              <span className="text-[--primary]">&nbsp;Login </span>
            </Link>
          </Typography>
        </Box>

        <Box className="!grid !gap-4 !mt-16">
          <Box className="!flex !gap-5">
            <TextField
              fullWidth
              size="small"
              autoComplete="off"
              placeholder="First Name"
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
              placeholder="Last Name"
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
          </Box>
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

        <Box className="!flex !mt-2 !items-center ">
          <ControlledCheckbox className="ml-[-12px] " />
          <Typography variant="span" className="!relative !top-[1px]">
            I agree to DopeSass
            <Link to="" className="ml-1 text-[--primary] no-underline">
              Terms of Service
            </Link>{" "}
            and
            <Link to="" className="ml-1 text-[--primary] no-underline">
              Privacy Policy
            </Link>
          </Typography>
        </Box>

        <Box className="!mt-5">
          <PrimaryButton
            buttonName="Create Account"
            className="!py-4 !w-full"
          />
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
            <img
              alt="SideImage"
              src={Apple}
              className="!w-auto !h-auto !relative !bottom-[2px]"
            />{" "}
            Continue with Apple
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SignupRightContent;
