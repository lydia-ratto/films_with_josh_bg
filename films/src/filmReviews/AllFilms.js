import React from "react"
import Film from "./Film"
import axios from "axios";
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/films"

function getApiData() {
  return axios.get(API_URL).then((response) => response.data)
}

function AllFilms() {
  const [films, setAllFilms] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getApiData();
        setAllFilms(items);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const allFilms = films.map(film =>
      <div className="films-grid">
        <Film film={film}/>
      </div>
    )

  return (
    <div>
      <h1>All film reviews</h1>
      {allFilms}
    </div>
  )
}

export default AllFilms;
