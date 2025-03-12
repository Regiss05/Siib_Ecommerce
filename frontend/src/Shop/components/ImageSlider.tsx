import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

// Import local images
import slide1 from "../../imges/statics/commerce.svg";
import slide2 from "../../imges/statics/bank.svg";
import slide3 from "../../imges/statics/dapps.svg";
import slide4 from "../../imges/statics/articles.svg";

const images = [
  { label: "Image 1", imgPath: slide1, buttonLabel: "Create Account", position: { bottom: "15%", left: "27%" } },
  { label: "Image 2", imgPath: slide2, buttonLabel: "Create Shop", position: { bottom: "15%", left: "32%" } },
  { label: "Image 3", imgPath: slide3, buttonLabel: "More...", position: { bottom: "15%", left: "26%" } },
  { label: "Image 4", imgPath: slide4, buttonLabel: "More...", position: { bottom: "15%", left: "28%" } },
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
      <h4 className="cardforyou">#Updatenews</h4>

      <Box sx={{ position: "relative", margin: "1rem 0" }}>
        <SwipeableViews index={activeStep} onChangeIndex={setActiveStep} enableMouseEvents>
          {images.map((step, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <img
                    src={step.imgPath}
                    alt={step.label}
                    style={{ width: "90%", borderRadius: "10px" }}
                  />
                  {/* Button with unique position */}
                  <Button
                    variant="contained"
                    sx={{
                      position: "absolute",
                      bottom: step.position.bottom,
                      left: step.position.left,
                      transform: "translateX(-50%)",
                      backgroundColor: "orange",
                      color: "white",
                      borderRadius: "5px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#e69500" },
                    }}
                  >
                    {step.buttonLabel}
                  </Button>
                </>
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      </Box>
    </Box>
  );
}
