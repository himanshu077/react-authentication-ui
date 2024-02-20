import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import SideImage from "../../common/SideImage/SideImage";
import { Link } from "react-router-dom";
import { inputLabelClasses } from "@mui/material/InputLabel";
import Authonicate from "../../layout/Authonicate";

const Signup = () => {
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
        <Box className="md:basis-1/2 !w-full !max-w-[554px] !m-auto border-2 !border-red-600">
          <Box>
            <Typography
              variant="h6"
              className=" !text-[--black] !font-bold !text-2xl"
            >
              Create account
            </Typography>
            <Typography className="Poppins400  !text-[--black] w-full lg:!text-sm !text-xs !mt-3 !mb-6">
              Already have an account?
              <Link to="/signin">
                <span className="Poppins400 text-[--primary]">
                  &nbsp;Login{" "}
                </span>
              </Link>
            </Typography>
          </Box>

          <Box className="!grid !gap-4 !mt-10">
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
                    padding: "10px",
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
                    padding: "10px",
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
                  padding: "10px",
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
                  padding: "10px",
                },
              }}
              type="password"
            />
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <Authonicate
        LeftContent={<LeftContent />}
        RightContent={<RightContent />}
      />
    </>
  );
};

export default Signup;
