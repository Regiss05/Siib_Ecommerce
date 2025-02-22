import React, { useState, useEffect } from "react";
import { Box, MobileStepper, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const images = [
  { label: "Image 1", imgPath: "https://vehicle-images.dealerinspire.com/595e-11002730/SALK19F41SA277136/2d2948d25fc135e0532b51fa686e3608.png" },
  { label: "Image 2", imgPath: "https://vehicle-images.dealerinspire.com/595e-11002730/SALK19F41SA277136/2d2948d25fc135e0532b51fa686e3608.png" },
  { label: "Image 3", imgPath: "https://vehicle-images.dealerinspire.com/595e-11002730/SALK19F41SA277136/2d2948d25fc135e0532b51fa686e3608.png" },
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

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: "auto", textAlign: "center" }}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ display: "flex", justifyContent: "center" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                src={step.imgPath}
                alt={step.label}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            <KeyboardArrowLeft /> Back
          </Button>
        }
      />
    </Box>
  );
}
