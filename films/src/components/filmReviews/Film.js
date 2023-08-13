import React from "react"

function Film(props) {
  console.log(props.film)
  return (
    <div className="film-box">
      <img src={props.film.image_url} alt="film poster" className="film-image"></img>
      <div className="film-text">
        <h3>{props.film.title}</h3>
        <div className="flex align-center">
          <img src={require("../../images/favicon.png")} className="rating-icon" alt="rating-icon"/>
          <h5>{props.film.josh_score}</h5>
        </div>
      </div>
    </div>
  )
}

export default Film;
