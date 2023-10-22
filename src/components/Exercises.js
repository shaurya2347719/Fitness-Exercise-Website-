// This file is for printing all the exercises on clicking from bodyparts or by searching from search bar.
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  useEffect(() => {    // useEffect will run this function whenever the bodyPart variable is changed which is present in its arguement.This is being done from setbodypart in bodypart.js.
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;  // currentPage is initialised with 1 and exercisesPerPage is initialised with 9 above.
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;  // calculated index of first page
  const currentExercises = exercises.slice(  // Last index to used in slice should be such that it is not to be included so indexofLastExercise is calculated accordingly.
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (event, value) => {  // Defining a paginate function for handling onchange event of Pagination.
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {" "}
        {currentExercises.map((exercise, index) => (  // mapping over all elements of currentExercises.
          <ExerciseCard key={index} exercise={exercise} />  // This key component cannot be directly accesed from ExerciseCard component.React uses it internally to optimise rendering process.It is used when we are rendering a dynamic list. 
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination  // This will divide and put the exercise cards into different pages.
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}  // The total no. of pages which has to be there.
            page={currentPage}  // The current active page.
            onChange={paginate}  // The event and the selected page number will automatically be passed to the paginate function which has been defined above.
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
