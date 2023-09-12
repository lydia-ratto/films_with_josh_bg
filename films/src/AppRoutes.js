import React from "react"
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import AllFilmsPage from "./components/pages/AllFilmsPage";
import HomePage from "./components/pages/HomePage";
import AddFilmPage from "./components/pages/AddFilmPage";

function AppRoutes() {
  return (
    <BrowserRouter>
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
        path="/films/add"
        element={
          <AddFilmPage />
        }
      />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
