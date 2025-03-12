import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

// Import local images
import slide1 from "../../imges/statics/commerce.svg";
import slide2 from "../../imges/statics/bank.svg";
import slide3 from "../../imges/statics/dapps.svg";
import slide4 from "../../imges/statics/articles.svg";

const images = [
  { label: "Image 1", imgPath: slide1 },
  { label: "Image 2", imgPath: slide2 },
  { label: "Image 3", imgPath: slide3 },
  { label: "Image 4", imgPath: slide4 },
];

export default function ImageSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [maxSteps]);

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: "auto", textAlign: "center" }}>
      <h4 className="cardforyou">#Promotions</h4>
      <Box sx={{ margin: "1rem 0" }}>
        <SwipeableViews index={activeStep} onChangeIndex={setActiveStep} enableMouseEvents >
          {images.map((step, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "center" }}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{ width: "90%", borderRadius: "10px" }}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      </Box>
    </Box>
  );
}
