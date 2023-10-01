import React from "react"
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import AllFilmsPage from "./components/pages/AllFilmsPage";
import HomePage from "./components/pages/HomePage";
import AddFilmPage from "./components/pages/AddFilmPage";
import FilmPage from "./components/pages/FilmPage"
import Navbar from "./components/sections/Navbar"
import { Box } from "@chakra-ui/react";
import Register from "./components/pages/RegisterPage";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Box margin="90px 130px">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          path="/films"
          element={
            <AllFilmsPage />
          }
        />
        <Route
          path="/films/:id"
          element={
            <FilmPage />
          }
        />
        <Route
          path="/films/add"
          element={
            <AddFilmPage />
          }
        />
        <Route
          path="/register"
          element={
            <Register />
          }
        />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default AppRoutes;
