/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const MainContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100vw",
        height: "100vh",
        p: 0,
        m: "0 auto",
        bgcolor: "#bcbcbc",
        display: "flex",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
