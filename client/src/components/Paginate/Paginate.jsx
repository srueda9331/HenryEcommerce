import './Paginate.css'
import React from "react";

export default function Pagination({phonesPerPage, allPhones, paginate}){
  const pageNumber = []; 

  for (let i = 0; i < Math.ceil(allPhones/phonesPerPage); i++) {
    pageNumber.push(i + 1) 
  }

  return (
    <nav className="paginated">
      <ul >
        {
          pageNumber?.map((number) => 
            (
              <button className="number" onClick={() =>{ paginate(number)}}>{number}</button>
            )
          )
        }
      </ul>
    </nav>
  )
}