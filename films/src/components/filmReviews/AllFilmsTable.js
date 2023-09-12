import React from "react"
import Film from "./Film"

function AllFilmsTable(items) {
  const films = items.items;
  return (
    <div>
      <div className="films-grid">
        {films?.map((film) => {
          return (
          <div>
            <Film film={film}/>
          </div>)
          })
        }
      </div>
    </div>
  )
}

export default AllFilmsTable;
