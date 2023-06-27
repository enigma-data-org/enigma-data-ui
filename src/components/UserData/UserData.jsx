import React, { useState, useEffect } from "react";
import "./UserData.css";
import axios from "axios";

export const UserData = (props) => {
  const { company = "IHOP" } = props;
  const [data, setData] = useState(null);

  async function getData() {
    try {
      let resp = await axios.get(
        "http://localhost:3000/get-enigma-modal-data",
        {
          params: {
            company: company,
          },
        }
      );
      console.log("resp.data", resp.data);
      setData(resp.data);
    } catch (error) {
      console.log("Error from Enigma Data:", error);
    }
  }

  useEffect(() => {
    if (company) {
      getData();
    }
  }, [company]);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="user-data-container">
      <form className="user-data-form-container" action="POST">
        <div className="user-data-form-cell">
          <label htmlFor="first-name">First Name</label>
          <input
            className="user-data-input"
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
          ></input>
        </div>
        <div className="user-data-form-container">
          <label htmlFor="last-name">Last Name</label>
          <input
            className="user-data-input"
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="user-data-form-container">
          <label htmlFor="dob">Date of birth</label>
          <input
            className="user-data-input"
            type="date"
            id="dob"
            name="dob"
            placeholder="Your name.."
          ></input>
        </div>
        <div className="user-data-form-container">
          <label htmlFor="name">Email</label>
          <input
            className="user-data-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          ></input>
        </div>
        <div className="user-data-form-container">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            className="user-data-input"
            type="tel"
            id="phone-number"
            name="phone-number"
            placeholder="Phone Number"
          ></input>
        </div>
      </form>
      <div className="user-data-right-side">
        <div className="user-data-right-content-container">
          {data?.user_data_picklist?.map((preference, index) => {
            return (
              <div key={index} className="picklist-container">
                <p>{preference?.header}</p>
                <select>
                  {preference?.picklist?.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          })}
        </div>
        <div>
          <button
            id="user-data-save-button"
            style={{
              backgroundColor: `#${data?.primary_color}`,
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
