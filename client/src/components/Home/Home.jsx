import "./Home.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { getAllPhones } from "../../redux/actions/actionCreators";

function Home() {
  const dispatch = useDispatch();
  const allPhones = useSelector(state => state.phones)

  useEffect(() => {
    dispatch(getAllPhones())
  }, [dispatch])

  return (
    <div className="intro-logo">
      <h3>Your Place to buy</h3>
      <div className="intro-button"></div>
      <span> change your phone Now!</span>
      <Cards allPhones={allPhones}/>
    </div>
  );
}

export default Home;