import './App.css';
import axios from "axios"
import Films from "./components/Films"
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/films"

function getApiData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [films, setFilms] = useState([])
  useEffect(() => {
    let mounted = true
    getApiData().then((items) => {
      if (mounted) {
        setFilms(items);
      }
    })
    return () => (mounted = false)
  }, []);


  return (
    <div className="App">
      <h1>Hello</h1>
      <Films films={films}/>
    </div>
  );
}

export default App;
