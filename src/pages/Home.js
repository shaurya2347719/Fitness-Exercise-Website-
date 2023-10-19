import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");  //bodyPart state initialised with "all"
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}  // passed {setExercises} to setExercises parameter of <SearchExercises> in SearchExercises. 
        bodyPart={bodyPart}  // passed {bodyPart} to bodyPart parameter of <SearchExercises> in SearchExercises.js
        setBodyPart={setBodyPart}  // passed {setBodypart} to setBodyPart parameter of <SearchExercises> in SearchExercises.js
      />
      <Exercises
        setExercises={setExercises}  // passed {setExercises} to setExercises parameter of <Exercises> in Exercises.js
        exercises={exercises}  // passed {exercises} to exercises parameter of <Exercises> in Exercises.js
        bodyPart={bodyPart}  // passed {bodyPart} to bodyPart parameter of <Exercises> in Exercises.js
      />
    </Box>
  );
};

export default Home;
