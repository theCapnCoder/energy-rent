import { Box, Divider, Stack, Typography } from "@mui/material";
import { DevLogo } from "../../assets/icons/DevLogo";

export const Footer = () => {
  return (
    <Box sx={{ margin: "0 auto", maxWidth: { xs: "100%", sm: 1140 } }}>
      <Divider />
      <Stack
        direction={"row"}
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{ p: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 } }}
      >
        <Typography sx={{ display: { xs: "none", md: "block" } }}>
          Аренда генераторов в Киеве. Все права защищены © 2021{" "}
        </Typography>

        <Stack direction={"row"} gap={3.5}>
          <Typography variant="subtitle2">Разработка и продвижение:</Typography>
          <DevLogo sx={{ width: 80, height: 20 }} />
        </Stack>
      </Stack>
    </Box>
  );
};
