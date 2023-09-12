import React from "react"

function FilmDetails(props) {
  console.log(props)
  return (
    <div className="film-box" color="brand">
      <img src={props.image_url} alt="film poster" className="film-image"></img>
      <div className="film-text">
        <h3>{props.title}</h3>
        <div className="flex align-center">
          <img src={require("../../images/favicon.png")} className="rating-icon" alt="rating-icon"/>
          <h5>{props.josh_score}</h5>
        </div>
      </div>
    </div>
  )
}

export default FilmDetails;