import Box from "@mui/material/Box";
import Container from "../../assets/Container";

const Navbar = () => {
  return (
    <Container>
      <Box
        sx={{
          height: 100,
          width: "100%",
          position: "fixed",
          top: 0,
          background: "#000",
        }}
      ></Box>
    </Container>
  );
};

export default Navbar;
