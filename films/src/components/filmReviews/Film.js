import React from "react"
import { Link } from "react-router-dom";

function Film(props) {
  return (
    <Link to={`/films/${props.film.id}`}>
      <div className="film-box" color="brand">
        <img src={props.film.image_url} alt="film poster" className="film-image"></img>
        <div className="film-text">
          <h3>{props.film.title}</h3>
          <div className="flex align-center">
            <img src={require("../../images/favicon.png")} className="rating-icon" alt="rating-icon"/>
            <h5>{props.film.josh_score}</h5>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Film;
