/** @jsxImportSource @emotion/react */
import * as React from "react";
import Box from "@mui/material/Box";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigatePrevIcon from "@mui/icons-material/NavigateBefore";
import _IndexCarouselNavButton from "./_IndexCarouselNavButton";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const IndexCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    if (activeStep === images.length - 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) return;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "flex-row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderRadius: "1rem",
        width: "100%",
      }}
    >
      <_IndexCarouselNavButton
        onClick={handleBack}
        icon={<NavigatePrevIcon />}
        sx={{
          left: 10,
        }}
        disabled={activeStep === 0}
      />

      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 185,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      <_IndexCarouselNavButton
        onClick={handleNext}
        icon={<NavigateNextIcon />}
        sx={{
          right: 10,
        }}
        disabled={activeStep === images.length - 1}
      />
    </Box>
  );
};
export default IndexCarousel;
