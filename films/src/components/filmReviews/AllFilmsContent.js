import React from "react"
import { useMemo, useContext } from 'react'
import FilmListContext from "../context/FilmListContext";
import AllFilmsTable from "./AllFilmsTable";

function normalizedFilmData(data) {
  console.log(data);
  if (data?.length > 0) {
    return data.map((item) => {
      return {
        ...item,
        imdbId: item.imdb_id,
        releaseYear: item.release_year,
        imageUrl: item.image_url,
        locationWatched: item.location_watched,
        seenBefore: item.seen_bvefore,
        joshScore: item.josh_score,
        imdbScore: item.imdb_score,
        rottenTomScore: item.rotten_tom_score,
        dateWatched: item.date_watched,
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        joshNotes: item.josh_notes,
        filmLengthMins: item.film_length_mins,
        ageRating: item.age_rating,
      }
    })
  }
}

function AllFilmsContent() {
  const { filmList } = useContext(FilmListContext);
  const formattedFilmData = useMemo(() => normalizedFilmData(filmList.items), [filmList.items]);

  return (
    <AllFilmsTable items={formattedFilmData} />
  )
}

export default AllFilmsContent;
