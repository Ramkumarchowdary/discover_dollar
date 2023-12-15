import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Btn = ({ handleOpen, anchorEl, open, handleClose, title, src }) => {
  return (
    <Stack
      sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        width: "200px",
        height: "160px",
      }}
    >
      {/* Button with image and dropdown arrow */}
      <Stack
        sx={{
          display: "flex",
          width: "50%",
          justifyContent: "center",
          mt: "10px",
          ml: "50px",
        }}
      >
        {/* Image */}
        <img src={src} alt="offers" onMouseEnter={handleOpen} />

        {/* Button with dropdown arrow */}
        <Button
          sx={{ fontSize: "15px" }}
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleOpen}
          onMouseEnter={handleOpen}
          style={{ color: "black" }}
          endIcon={<ArrowDropDownIcon />}
          color="primary"
        >
          {title}
        </Button>
      </Stack>

      {/* Dropdown Menu */}
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {/* Menu Items */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Radiant" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <StarIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Rosewater" />
        </MenuItem>
        {/* Divider */}
        {/* <Divider /> */}
        {/* More Menu Items */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MailOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Diamond" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <WorkOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Orchid" />
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default Btn;
