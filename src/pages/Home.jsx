import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Exercises from "../components/Exercises";
import SearchExercise from "../components/SearchExercise";
function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Hero />
      <SearchExercise
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
}

export default Home;
