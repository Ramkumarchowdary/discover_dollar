import React, { useState, useEffect } from "react";
import { slides } from "../Data.js";
import { Paper, Box, IconButton, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ImageSlider = () => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to handle previous slide button click
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Auto-scroll to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: "relative", textAlign: "center", mb: "50px" }}>
      {/* Iterate over each slide in the slides array */}
      {slides.map(({ image, text }, index) => (
        // Display the current slide and hide others
        <Paper
          key={index}
          style={{
            display: index === currentIndex ? "block" : "none",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt={`slide-${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Display slide text on top of the image */}
          <Typography
            variant="subtitle1"
            sx={{
              position: "absolute",
              top: {
                xs: "118%",
                sm: "110%",
                md: "108%",
                lg: "105%",
                xl: "105%",
              },
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "blue",
            }}
          >
            {text}
          </Typography>
        </Paper>
      ))}
      {/* Display navigation dots at the bottom */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: -38,
          width: "100%",
        }}
      >
        {slides.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            sx={{
              color: index === currentIndex ? "primary.main" : "action.active",
              fontSize: 16,
            }}
          />
        ))}
      </Stack>
      {/* Display previous slide button on the left */}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: 2,
        }}
        onClick={handlePrev}
      >
        <NavigateBeforeIcon />
      </IconButton>
      {/* Display next slide button on the right */}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 2,
        }}
        onClick={handleNext}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
