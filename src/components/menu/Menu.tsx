import { Home, People } from "@mui/icons-material";
import {
  BoxProps,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Link } from "react-router-dom";
import { menu } from "../../data/data";

const listStyle: BoxProps["sx"] = {
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
};

export const Menu = () => {
  return (
    <>
      {menu.map(({ id, title, listItems }) => (
        <List
          key={id}
          component="nav"
          subheader={
            <ListSubheader component="div" sx={{ textTransform: "uppercase" }}>
              {title}
            </ListSubheader>
          }
          sx={listStyle}
        >
          {listItems.map(({ id, title, url, icon }) => (
            <Link to={url} key={id}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      ))}
    </>
  );
};
