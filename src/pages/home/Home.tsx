import { Box, BoxProps } from "@mui/material";

const homeStyle: BoxProps["sx"] = {
  backgroundColor: "red",
};

export const Home = () => {
  return <Box sx={homeStyle}>Home</Box>;
};
