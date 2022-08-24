import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import "./UserPersonalInfo.css";

const UserPersonalInfo = () => {
  const dispatch = useDispatch();
  //   const isSession = useSelector((state) => state.loginState);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
  });
  const [password, setPassword] = useState({
    beforePassword: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState({});
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handlePassword(e) {
    setPassword({ ...password, [e.target.name]: e.target.value });

    setError(
      validatePassword({ ...password, [e.target.name]: e.target.value })
    );
  }

  function validatePassword(input) {
    let error = {};
    if (input.password || input.confirm) {
      if (input.confirm !== input.password) {
        error.password = "Las contraseñas deben coincidir";
        console.log("las contraseñas no son iguales");
      }
      if (input.confirm === input.password) {
        console.log("las contraseñas son iguales");
      }
    }
    return error;
  }

  return (
    <div className="user_info_container">
      <div className="user_info_padre">
        <div className="user_info_form">
          <div className="user_info_first_panel">
            <div className="user_info_first_panel_inputs">
              <div className="user_info_name">
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  placeholder="nombre"
                  value={input.firstName}
                  onChange={(e) => handleChange(e)}
                  name="firstName"
                />
              </div>
              <div className="user_info_surname">
                <label htmlFor="">Apellido:</label>
                <input
                  type="text"
                  placeholder="apellido"
                  value={input.lastName}
                  onChange={(e) => handleChange(e)}
                  name="lastName"
                />
              </div>
            </div>

            <div className="user_info_btnfp">
              <button>Actualizar datos</button>
            </div>
          </div>

          <div className="user_info_second_panel">
            <div className="user_info_second_panel_inputs">
              <div className="user_info_name">
                <label htmlFor="">Contraseña actual:</label>
                <input
                  type="text"
                  placeholder="Ingrese contraseña actual"
                  value={password.beforePassword}
                  onChange={(e) => handlePassword(e)}
                  name="beforePassword"
                />
              </div>
              <div className="user_info_name">
                <label htmlFor="">Contraseña nueva:</label>
                <input
                  type="text"
                  placeholder="Ingrese contraseña nueva"
                  value={password.password}
                  onChange={(e) => handlePassword(e)}
                  name="password"
                />
              </div>
              <div className="user_info_name">
                <label htmlFor="">Confirmar contraseña:</label>
                <input
                  type="text"
                  placeholder="Confirme contraseña"
                  value={password.confirm}
                  onChange={(e) => handlePassword(e)}
                  name="confirm"
                />
              </div>
            </div>
            <div className="user_info_btnfp">
              <button>Actualizar datos</button>
            </div>
          </div>
        </div>

        <div className="user_info_btn">
          <Link to="/profiledashboard">
            <button>volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPersonalInfo;
