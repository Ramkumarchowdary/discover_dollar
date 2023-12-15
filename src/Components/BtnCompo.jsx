import { Button, Stack } from "@mui/material";
import React from "react";

const BtnCompo = ({ src, title }) => {
  return (
    <Stack
      sx={{
        mb: "5px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        width: "200px",
        height: "160px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          width: "50%",
          justifyContent: "center",
          mt: "10px",
          ml: "50px",
        }}
      >
        <img src={src} alt="offers" />
        <Button
          sx={{ width: "100%", fontSize: "20px" }}
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          color="primary"
          style={{ color: "black" }}
          disableRipple
        >
          {title}
        </Button>
      </Stack>
    </Stack>
  );
};

export default BtnCompo;
