import React, { useState } from "react";
import "../css/register.css";

export default function Register() {
  const [isDisplay, setDisplay] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [error, populateError] = useState({
    first_name: true,
    last_name: true,
    email: true,
    mobile_number: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    // console.log(isSuccess());
    setDisplay(true);
  };

  const handleInputChange = (e) => {
    setDisplay(false);
    const currentKey = e.target.getAttribute("data_key");

    if (e.target.value !== "") {
      populateError((oldState) => ({
        ...oldState,
        [currentKey]: false,
      }));
    } else {
      populateError((oldState) => ({
        ...oldState,
        [currentKey]: true,
      }));
    }
  };

  const isSuccess = () => {
    return Object.values(error).every((value) => value !== true);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {isDisplay && isSuccess() && <p  className='successful'>Registration Completed !!!</p>}

        <input
          type="text"
          placeholder="First Name"
          onChange={handleInputChange}
          data_key="first_name"
        ></input>
        {isSubmit && error.first_name && <p>* Please enter First Name</p>}

        <input
          type="text"
          placeholder="Last Name"
          onChange={handleInputChange}
          data_key="last_name"
        ></input>
        {isSubmit && error.last_name && <p>* Please enter Last Name</p>}

        <input
          type="text"
          placeholder="Email Id"
          onChange={handleInputChange}
          data_key="email"
        ></input>
        {isSubmit && error.email && <p>* Please enter Email Id</p>}

        <input
          type="text"
          placeholder="Mobile Number"
          onChange={handleInputChange}
          data_key="mobile_number"
        ></input>
        {isSubmit && error.mobile_number && <p>* Please enter Mobile Number</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}