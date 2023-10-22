import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>  // <Routes> is the Container for our route definitions.When the URL matches "/", the <Home /> component will be rendered.The other Route path line defines a dynamic route with a parameter (:id).The : before id indicates that id is a route parameter,and it can have any value.The route parameter id will be passed as a prop to the ExerciseDetail component. 
        <Route path="/" element={<Home />} />  
        <Route path="/exercise/:id" element={<ExerciseDetail />} />  
      </Routes>  
      <Footer /> 
    </Box>
  );
};

export default App;
