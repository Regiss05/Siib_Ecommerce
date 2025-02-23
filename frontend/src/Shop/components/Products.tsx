import React, { useState } from "react";
import { Box, Button } from "@mui/material";

export default function Products() {
  // State to track the active button
  const [activeButton, setActiveButton] = useState<string>("All");

  // Function to handle button click and set active button
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <Box sx={{ color: "gray", margin: "0 30px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ fontSize: "14px" }}>PRODUCTS</Box>
        {/* <Button>See All</Button> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto", // Enable horizontal scrolling
          gap: "10px", // Space between buttons
          padding: "10px 0", // Padding around the button container
          flexWrap: "nowrap", // Prevent buttons from wrapping to the next line
        }}
      >
        {[
          "All",
          "SIIB Burundi Shop",
          "SIIB Tanzania Shop",
          "SIIB Benin Shop",
          "SIIB Africa Shop",
        ].map((label) => (
          <Button
            key={label}
            sx={{
              backgroundColor: activeButton === label ? "blue" : "#eeeeee",
              color: activeButton === label ? "white" : "black",
              borderRadius: "20px",
              whiteSpace: "nowrap", // Prevent text from wrapping
              minWidth: "auto", // Ensures button width is based on content
              padding: "5px 10px", // Remove size constraints
              fontSize: "11px", // Uses default font size
            }}
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
