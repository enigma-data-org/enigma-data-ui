import React, { useState, useEffect } from "react";
import "./UserData.css";
import axios from "axios";
import Logo from "../../assets/enigma-logo.svg";

export const UserData = (props) => {
  const { company = "IHOP" } = props;
  const [data, setData] = useState(null);

  async function getData() {
    try {
      let resp = await axios.get(
        "https://enigma-data-server-production.up.railway.app/get-enigma-modal-data",
        {
          params: {
            company: company,
          },
        }
      );
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
    <div className="user-data-main-container">
      <h2>🚀 Your Data Profile</h2>
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
                  <p className="user-data-picklist-header">
                    {preference?.header}
                  </p>
                  <div className="user-data-radio-container">
                    {preference?.picklist?.map((option, index) => {
                      return (
                        <div>
                          <label htmlFor="radio">{option}</label>
                          <input type="radio" value={option} />
                        </div>
                      );
                    })}
                  </div>
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
      <div className="enigma-logo-container">
        <img className="modal-enigma-logo" src={Logo} alt="Enigma Data Logo" />
        <p>Powered by Enigma Data</p>
      </div>
    </div>
  );
};
