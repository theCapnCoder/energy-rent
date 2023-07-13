import { Phone } from "@mui/icons-material";
import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets/icons/Logo";

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ px: { xs: 0, sm: 2 } }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button
          variant="outlined"
          startIcon={<Phone />}
          sx={{ display: { xs: "none", md: "inline-flex" } }}
        >
          Заказать звонок
        </Button>

        <Stack direction={"row"}>
          <Logo />
          <Typography sx={{ fontWeight: 600 }}>ЭнэргоРент</Typography>
        </Stack>

        <Stack>
          <Typography sx={{ fontWeight: 600 }}>+7 (495) 926 76 76</Typography>
          <Typography
            variant="subtitle1"
            sx={{ display: { xs: "none", sm: "block" }, pl: 1 }}
          >
            Нужен генератор? Звоните!
          </Typography>
        </Stack>
      </Stack>
    </AppBar>
  );
};
