// import { Button } from "@mui/material";
import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Header />
      <Home />
      {/* <Navbar /> */}
    </Box>
  );
}

export default App;
