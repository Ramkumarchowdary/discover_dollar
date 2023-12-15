import React from "react";
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { itemData } from "../Data";

const Footear = () => {
  return (
    <Stack>
      {/* Top Section with Electronics */}
      <Stack
        sx={{
          border: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Section for Electronics Information */}
        <Box
          sx={{ width: { lg: "350px", xs: "200px", md: "200px" }, p: "10px" }}
        >
          <Typography variant="h5" component="h5">
            Best of Electronics
          </Typography>
          <Typography variant="p" component="p">
            Best of Electronics
          </Typography>
        </Box>

        {/* Button to View All Electronics */}
        <Box
          sx={{
            m: { xs: "20px 5px ", lg: "10px ", sm: "10px" },
            width: { xs: "100px", md: "200px" },
            height: { xs: "50px", md: "50px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            disableRipple
            sx={{ textTransform: "capitalize" }}
          >
            <Typography variant="p" component="p">
              View All
            </Typography>
          </Button>
        </Box>
      </Stack>

      {/* Grid of Electronics Items */}
      <Stack>
        <Grid container spacing={0.2}>
          {/* Map through itemData to display each item */}
          {itemData.map(({ img }, i) => (
            <Grid item xs={12} sm={6} md={2} key={i}>
              <ImageList sx={{ height: "180px", overflow: "hidden" }}>
                <ImageListItem
                  sx={{
                    width: { xs: "200%", lg: "230px" },
                  }}
                >
                  {/* Display image for each item */}
                  <img src={img} sx={{ height: "100%" }} alt="nothing" />
                </ImageListItem>
              </ImageList>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Footear;
