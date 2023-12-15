import { Stack } from "@mui/material";
import Footear from "./Components/Footear";
import NavBar from "./Components/NavBar";
import ImageSlides from "./Components/ImageSlides";
import ImageWithDropdown from "./Components/NestedDropdownMenu";

function App() {
  return (
    <Stack>
      <NavBar />
      <ImageWithDropdown />
      <ImageSlides />
      <Footear />
    </Stack>
  );
}

export default App;
