import React from "react"

function FilmDetails({ filmData }) {
  return (
    <div className="container">
      <div className="show--top">
        <img src={filmData.imageUrl} alt="poster" className="show--poster" />
        <div className="show--film-info">
          <h2 className="show--film-title">{filmData.title} - {filmData.releaseYear}</h2>
          <div className="show--film-ratings">
            <div className="show--josh-rating">Josh rating: {filmData.joshScore}</div>
            <div className="show--other-ratings">
              <div>IMDb rating: {filmData.imdbScore}</div>
              <div>RottenTomatoes Score: {filmData.rottenTomScore}</div>
            </div>
          </div>
        </div>
        <div className="show--bottom">
          <h2>What Josh says:</h2>
          <div className="show--josh-notes">{filmData.joshNotes}</div>
        </div>
      </div>
    </div>
  )
}

export default FilmDetails;