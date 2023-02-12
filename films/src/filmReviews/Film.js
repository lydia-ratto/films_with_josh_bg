import React from "react"

function Film(props) {
  console.log(props.film)
  return (
    <div>
      <img src={props.film.image_rl} alt="film poster"></img>
      <h3>{props.film.title}</h3>
    </div>
  )
}

export default Film;
