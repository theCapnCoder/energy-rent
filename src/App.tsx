import { Box, BoxProps, Typography } from "@mui/material";
import { Generetor } from "./containers/Generetor";
import { Home } from "./pages/home/Home";
import { NavBar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { Outlet } from "react-router-dom";

const container: BoxProps["sx"] = {};
const menuContainer: BoxProps["sx"] = {};
const contentConteiner: BoxProps["sx"] = {};

function App() {
  return (
    <Box>
      <NavBar />
      <Box sx={container}>
        <Box sx={menuContainer}>
          <Menu />
        </Box>
        <Box sx={contentConteiner}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
