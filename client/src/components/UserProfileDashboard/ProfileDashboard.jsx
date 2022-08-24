import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./ProfileDashboard.css";
const ProfileDashboard = () => {
  return (
    <div className="profile_dashboard_container">
      <div className="profile_dashboard_padre">
        <div class="card">
          <div class="card-border-top"></div>
          <div class="img">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              alt=""
            />
          </div>
          <span> Nombre</span>
          <p class="job"> Usuario || Administrador</p>
          <Link to="/userpersonalinfo">
            <button> Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
