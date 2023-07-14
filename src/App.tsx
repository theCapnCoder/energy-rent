import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { Generetor } from "./containers/Generetor";
import { Home } from "./pages/home/Home";
import { NavBar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { Outlet } from "react-router-dom";
import { blueGrey, deepOrange } from "@mui/material/colors";

const container: BoxProps["sx"] = {};
const menuContainer: BoxProps["sx"] = {};
const contentConteiner: BoxProps["sx"] = {};

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction={"row"}>
        <Box
          sx={{
            width: 250,
            padding: "5px 20px",
            borderRight: "2px solid grey",
          }}
        >
          <Menu />
        </Box>
        <Box sx={{ width: "100%", padding: "5px 20px" }}>
          <Outlet />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}

export default App;
