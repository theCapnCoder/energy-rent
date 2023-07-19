import React from "react";
import { topUsers } from "../../data/data";
import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export const TopBox = () => {
  return (
    <Box>
      <Typography variant="h4" p={1}>
        Top Deals
      </Typography>
      {topUsers.map(({ id, img, username, email, amount }) => (
        <List key={id} disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={img} />
            </ListItemAvatar>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ width: "100%" }}
            >
              <ListItemText
                primary={username}
                secondary={email}
                secondaryTypographyProps={{
                  width: { lg: "120px", xl: "auto" },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              />
              <Typography variant="body2">$ {amount}</Typography>
            </Stack>
          </ListItemButton>
        </List>
      ))}
    </Box>
  );
};
