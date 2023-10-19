import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";  // import exerciseOptions and fetchData from fetchData.js file 
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {  // This useEffect will run given function immediately when this component is mounted due to the empty dependency [].And it runs only once.
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);  // sets bodyParts with data of bodyPartsdata along with "all" also appended to it.
    };
    fetchExercisesData();
  }, []); // Used to send data to print all the bodyparts in the HorizontalScrollBar.
  const handleSearch = async () => {
    if (search) {  // checks if search is non-empty string.
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = excerciseData.filter(  // filters all data with given conditions and return it to searchedExercises variable.
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}  // sets the search with the value e passed in the arguement.
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "75px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}  // On clicking the search button onclick event happens and handleSearch is called.
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}> // This will print all the bodyparts in the Horizontal Scroll Bar.
        <HorizontalScrollbar  // data,bodyParts and bodyPart are passed to <HorizontalScrollbar> in HorizontalScrollBar.js
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
