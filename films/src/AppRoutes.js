import React from "react"
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import AllFilmsPage from "./components/pages/AllFilmsPage";
import HomePage from "./components/pages/HomePage";
function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/films"
        element={
          <HomePage />
        }
      />
      <Route
        path="/films/list"
        element={
          <AllFilmsPage />
        }
      />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
