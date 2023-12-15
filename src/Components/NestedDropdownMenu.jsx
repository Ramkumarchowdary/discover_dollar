import React, { useState } from "react";
import { Stack } from "@mui/material";
import Btn from "./Btn";
import BtnCompo from "./BtnCompo";

const ImageWithDropdown = () => {
  // State for managing the anchor element of the dropdown
  const [anchorEl, setAnchorEl] = useState(null);

  // Event handler to open the dropdown
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler to close the dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Boolean variable to check if the dropdown is open
  const open = Boolean(anchorEl);

  return (
    <div>
      {/* Stack for arranging buttons in a row */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          border: 1,
        }}
      >
        {/* Button component with image and title (Offers) */}
        <BtnCompo
          src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/085406bae47866d5.png?q=100"
          title={"Offers"}
        />

        {/* Button component with image and title (Mobile) */}
        <BtnCompo
          src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/64f1cc66052c66ef.png?q=100"
          title={"Mobile"}
        />

        {/* Custom dropdown button (Fashion) */}
        <Btn
          handleOpen={handleOpen}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          title={"Fashion"}
          src={
            "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6dbed7ba5417672f.jpg?q=100"
          }
        />

        {/* Button component with image and title (Home) */}
        <BtnCompo
          src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/26e11f4698473e49.png?q=100"
          title={"Home"}
        />

        {/* Custom dropdown button (Electronics) */}
        <Btn
          handleOpen={handleOpen}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          title={"Electronics"}
          src={
            "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/f9c7aaa5f5455ae7.png?q=100"
          }
        />

        {/* Button component with image and title (Appliances) */}
        <BtnCompo
          src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/26e11f4698473e49.png?q=100"
          title={"Appliances"}
        />

        {/* Custom dropdown button (Beauty) */}
        <Btn
          handleOpen={handleOpen}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          title={"Beauty"}
          src={
            "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/c444de48eb75d450.png?q=100"
          }
        />
      </Stack>
    </div>
  );
};

export default ImageWithDropdown;
