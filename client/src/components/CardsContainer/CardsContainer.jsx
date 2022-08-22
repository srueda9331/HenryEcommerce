import React from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../../redux/actions/actionCreators";
import { useState } from "react";
import Pagination from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar";
import "./CardsContainer.css";
import "../Paginate/Paginate.css";

function CardsContainer() {
  const dispatch = useDispatch();
  const allPhones = useSelector((state) => state.phones);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonePerPage] = useState(12);
  const idxofLastPhone = currentPage * phonesPerPage;
  const idxofFirstPhone = idxofLastPhone - phonesPerPage;
  const currentPhones = allPhones.slice(idxofFirstPhone, idxofLastPhone);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <div className="cards-container">
      <div className="filters-container">
        <Filters />
        <SearchBar className="SearchBar" setCurrentPage={setCurrentPage} />
      </div>
      <div className="pag-container">
        <Pagination
          phonesPerPage={phonesPerPage}
          allPhones={allPhones.length}
          paginate={paginate}
        />
      </div>
      <Cards
        allPhones={allPhones}
        paginate={paginate}
        currentPhones={currentPhones}
        phonesPerPage={phonesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      ;
    </div>
  );
}

export default CardsContainer;
