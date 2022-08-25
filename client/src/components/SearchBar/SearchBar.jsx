import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPhoneName } from "../../redux/actions/actionCreators";
import "./SearchBar.css";

function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPhoneName(name));
    setCurrentPage(1);
  }

  return (
    <div className="divSearchBar">
      <input
        className="inputSearchBar"
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Phone..."
      />
      <button
        className="btnSearchBar"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
