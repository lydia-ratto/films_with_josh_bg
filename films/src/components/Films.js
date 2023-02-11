import React from "react"

function Films(props) {
  return (
    <div>
      <h1>These books are from the API</h1>
      {props.films.map(film => {
        return (
        <div key={film.id}>
          <div>{film.title}</div>
        </div>
        )
      })}
    </div>
  )
}

export default Films;
