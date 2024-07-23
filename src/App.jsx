import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <Box>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
