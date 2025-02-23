import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ChatIcon from "@mui/icons-material/Chat";

export default function Footer() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        paddingBottom: "13px",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{ "&.Mui-selected": { color: "#362fff" } }}
        />
        <BottomNavigationAction
          label="Favorite"
          icon={<FavoriteBorderIcon />}
          sx={{ "&.Mui-selected": { color: "#362fff" } }}
        />
        <BottomNavigationAction
          icon={<AddCircleIcon sx={{ fontSize: "60px" }} />}
          sx={{ "&.Mui-selected": { color: "#362fff" } }}
        />
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartCheckoutIcon />}
          sx={{ "&.Mui-selected": { color: "#362fff" } }}
        />
        <BottomNavigationAction
          label="Chat"
          icon={<ChatIcon />}
          sx={{ "&.Mui-selected": { color: "#362fff" } }}
        />
      </BottomNavigation>
    </Paper>
  );
}
