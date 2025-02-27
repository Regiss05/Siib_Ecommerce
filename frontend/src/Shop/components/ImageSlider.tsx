import React, { useState, useEffect } from "react";
import { Box, MobileStepper, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const images = [
  { label: "Image 1", imgPath: "https://vehicle-images.dealerinspire.com/595e-11002730/SALK19F41SA277136/2d2948d25fc135e0532b51fa686e3608.png" },
  { label: "Image 1", imgPath: "https://img.freepik.com/premium-photo/hummer-car-from-front-isolated-white-background_725455-272.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },
  { label: "Image 1", imgPath: "https://img.freepik.com/free-psd/view-crossroad-car_23-2151780963.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },
  { label: "Image 1", imgPath: "https://img.freepik.com/premium-photo/3d-car-white-background_677136-9808.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },
  { label: "Image 1", imgPath: "https://img.freepik.com/premium-vector/car-art-3d-4x4-vector-template-element-sign-symbol-logo-template-vector-graphic-design-illustration_621257-95.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },

];

export default function ImageSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 60000);
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
      <h4 className="cardforyou">#Cardforyou</h4>
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
                style={{ width: "65%", borderRadius: "10px" }}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      {/* <MobileStepper
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
      /> */}
    </Box>
  );
}
