import React from "react"
import {
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
import Login from "./components/pages/LoginPage";
import useUserAuth from "./components/hooks/useAuth";
import EditFilmPage from "./components/pages/EditFilmPage";

function AppRoutes() {
  const { user, login, logout, register } = useUserAuth();

  return (
    <div>
      <Navbar 
      logout={logout}
      user={user}/>
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
            path="/films/edit/:id"
            element={
              <EditFilmPage />
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
              <Register register={register} />
            }
            />
          <Route
            path="/login"
            element={
              <Login 
              login={login}
              user={user} />
            }
            />
          </Routes>
        </Box>
      </div>
  )
}

export default AppRoutes;
