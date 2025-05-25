import { Box } from "@mui/material";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const Container = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "red",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
