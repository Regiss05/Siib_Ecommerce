import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import clothes from "../../imges/statics/clothes.svg";
import electronics from "../../imges/statics/electronics.svg";
import shoes from "../../imges/statics/shoes.svg";
import house from "../../imges/statics/house.svg";

export default function Cathegories() {
  return (
    <Box sx={{ margin: "5px 20px", fontSize: "12px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ fontSize: "14px", color: "gray" }}>CATEGORIES</Box>
        <Button sx={{ color: "#362FFF", fontweight: "black" }}>See All</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", color: "gray" }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button><img className="icocat" src={clothes} alt="clothes" /></Button>
          Clothes
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button><img className="icocat" src={electronics} alt="Electronics" /></Button>
          Electronics
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button><img className="icocat" src={shoes} alt="clothes" /></Button>
          Shoes
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button><img className="icocat" src={house} alt="House" /></Button>
          Houses
        </Box>
      </Box>
    </Box>
  );
}
