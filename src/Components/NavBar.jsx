import {
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";


const NavBar = () => {
  return (
    <Stack
      sx={{
        background: "#1e88e5",
        width: 1,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Logo and Search Bar */}
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        {/* Logo */}
        <Stack sx={{ width: "150px" }}>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              color: "#f5f5f5",
              ml: {
                lg: "100px",
                md: "50px",
                sm: "50px",
                xl: "100px",
                xs: "50px",
              },
              position: "relative",
              top: "25px",
              height: "100px",
              fontWeight: "bold",
            }}
          >
            FlipKart
            <Typography
              variant="h5"
              component="h5"
              sx={{
                color: "#ffd600",
                ml: {
                  lg: "30px",
                  md: "40px",
                  sm: "40px",
                  xl: "30px",
                  xs: "30px",
                },
                position: "relative",
                top: "0px",
                fontWeight: "bold",
                width: "68px",
                height: "30px",
              }}
            >
              Pluse
            </Typography>
          </Typography>
        </Stack>

        {/* Search Bar */}
        <Stack sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            InputProps={{
              style: { border: "1px solid white", color: "white" },
            }}
            placeholder="Search for products, brands, and more"
            sx={{
              width: { lg: "500px" },
              position: "relative",
              left: "50px",
              top: "30px",
              ml: "40px",
            }}
          />
        </Stack>
      </Stack>

      {/* Dark Mode icon and Cart */}
      <Stack sx={{ display: "flex", flexDirection: "row", width: "300px" }}>
        {/* Dark Mode Toggle */}
        <Stack sx={{ mt: "25px" }}>
          <DarkModeRoundedIcon
            sx={{
              fontSize: { lg: "50px", sm: "50px" },
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />
        </Stack>

        {/* Shopping Cart Icon */}
        <Stack>
          <AddShoppingCartRoundedIcon
            sx={{ fontSize: "50px", color: "#fafafa", mt: "25px", ml: "40px" }}
          />
        </Stack>

        {/* Cart Text */}
        <Typography
          variant="h5"
          component="h5"
          sx={{
            color: "#fafafa",
            mt: "34px",
          }}
        >
          Cart
        </Typography>
      </Stack>
    </Stack>
  );
};

export default NavBar;
