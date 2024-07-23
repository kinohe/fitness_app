import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";

import SearchExercise from "../components/SearchExercise";
function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);
  return (
    <Box>
      <Hero />
      <SearchExercise
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercise}
      />
      {/* <Exercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercise}
      /> */}
    </Box>
  );
}

export default Home;
