// import React, { useState, useEffect } from "react";
// import { Box, MobileStepper, Button } from "@mui/material";
// import SwipeableViews from "react-swipeable-views";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// const images = [
//   { label: "Image 1", imgPath: "" },
//   { label: "Image 1", imgPath: "https://img.freepik.com/premium-photo/hummer-car-from-front-isolated-white-background_725455-272.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },
//   { label: "Image 1", imgPath: "https://img.freepik.com/free-psd/view-crossroad-car_23-2151780963.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },
//   { label: "Image 1", imgPath: "https://img.freepik.com/premium-photo/3d-car-white-background_677136-9808.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },
//   { label: "Image 1", imgPath: "https://img.freepik.com/premium-vector/car-art-3d-4x4-vector-template-element-sign-symbol-logo-template-vector-graphic-design-illustration_621257-95.jpg?ga=GA1.1.638317358.1740652806&semt=ais_hybrid" },

// ];

// export default function ImageSlider() {
//   const [activeStep, setActiveStep] = useState(0);
//   const maxSteps = images.length;

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
//     }, 60000);
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [maxSteps]);

//   const handleNext = () => {
//     setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
//   };

//   return (
//     <Box sx={{ maxWidth: 800, flexGrow: 1, margin: "auto", textAlign: "center" }}>
//       <h4 className="cardforyou">#Promotions</h4>
//       <SwipeableViews
//         index={activeStep}
//         onChangeIndex={setActiveStep}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label} style={{ display: "flex", justifyContent: "center" }}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <img
//                 src={step.imgPath}
//                 alt={step.label}
//                 style={{ width: "65%", borderRadius: "10px" }}
//               />
//             ) : null}
//           </div>
//         ))}
//       </SwipeableViews>

//       {/* <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" onClick={handleNext}>
//             Next <KeyboardArrowRight />
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack}>
//             <KeyboardArrowLeft /> Back
//           </Button>
//         }
//       /> */}
//     </Box>
//   );
// }
import React from "react";
import { Box, Typography,Button  } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Autoplay, Pagination } from "swiper/modules";
import banner from '../../imges/statics/banner.svg';
import banner2 from '../../imges/statics/banner2.svg';
import banner3 from '../../imges/statics/banner4.svg';
import font from '../../imges/statics/fonts.svg';
import { margin } from "@mui/system";
const slides = [
  { title: "Dapps Marketplace Web3", image: banner,  },
  { title: "Secure & Fast Payments", image: banner2, },
  { title: 'Do you sell products?', image: banner3, buttonText: "Create Account", },

];

export default function BannerSlider() {
  return (
    <Box sx={{ width: "90%", maxWidth: 420, mx: "auto", mt: 2 }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                background: "#F5F5F5",
                color: "#000",
                height: 190,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
          
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
         
                style={{
                  width: "100%",
                  height: "110%",
                  objectFit: "cover",
                  display: 'block',
                  borderRadius:'20px',
                  flexGrow: '88px',
                  left: 55,
                  right: 44,
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  position: "absolute",
                  color: "#fff",
                  marginBottom:'60px',
                  borderRadius: "4px",
                  left:'40px',
                  fontWeight:'400',
                 fontStyle: 'normal',
                  fontSize:'22px',
                  fontFamily: "Pacifico",
                }}
                
              >
                 {slide.title}
            
              </Typography>
             {slide.buttonText && (
                           <Box
                             sx={{
                               position: 'absolute',
                               bottom: 10, // Adjust position as needed
                               left: 44,   // Adjust position as needed
                               transition: 'transform 0.3s ease-in-out', // Add transition for smooth animation
                               '&:hover': {
                                 transform: 'scale(1.05)', // Add hover effect (optional)
                               },
                             }}
                           >
                             <Button sx={{backgroundColor:'#FF9A00'}} variant="contained" >
                               {slide.buttonText}
                             </Button>
                           </Box>
                         )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
