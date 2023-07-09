import React, { useState, useEffect } from "react";
import axios from "axios";
import Switch from "react-switch";
import Logo from "../../assets/enigma-logo.svg";
import "./CompanyData.css";

export const CompanyData = (props) => {
  const { company } = props;
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
      setData(resp.data.company_data_info);
    } catch (error) {
      console.log("Error from Enigma Data:", error);
    }
  }

  useEffect(() => {
    if (company) {
      getData();
    }
  }, [company]);

  if (!company || !data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="company-data-container">
      <div className="company-data-left">
        <h3>{company}</h3>
        <h2>You deserve to be in control of your data.</h2>
        <p>Opt-in to share your data and receive rewards made just for you. </p>
        <form className="company-data-form-container" action="POST">
          <div className="company-data-form-cell">
            <label className="company-data-input-header" htmlFor="first-name">
              First Name
            </label>
            <input
              className="company-data-input"
              type="text"
              id="first-name"
              name="first-name"
              placeholder="John"
            ></input>
          </div>
          <div className="company-data-form-cell">
            <label className="company-data-input-header" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="company-data-input"
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Appleseed"
            ></input>
          </div>
          <div className="company-data-form-cell">
            <label className="company-data-input-header" htmlFor="name">
              Email
            </label>
            <input
              className="company-data-input"
              type="email"
              id="email"
              name="email"
              placeholder="johnappleseed@gmail.com"
            ></input>
          </div>
          <div className="company-data-form-cell">
            <label className="company-data-input-header" htmlFor="phone-number">
              Phone Number
            </label>
            <input
              className="company-data-input"
              type="tel"
              id="phone-number"
              name="phone-number"
              placeholder="xxx-xxx-xxxx"
            ></input>
          </div>
        </form>
      </div>
      <div className="company-data-right">
        <h2 className="company-data-pref-header">My {company} preferences</h2>
        {data.map((item, index) => {
          return (
            <div className="company-data-list-container" key={index}>
              <h3 className="company-data-category-header">{item.header}</h3>
              {item.company_data_list.map((listItem, index) => {
                return (
                  <div key={index}>
                    <div className="company-data-list-header-container">
                      <h5>{listItem.header}</h5>
                      <Switch
                        height={20}
                        width={48}
                        // onChange={() => handleButtonToggle(index)}
                        // checked={isToggled[index] ? true : false}
                      />
                    </div>
                    {listItem.choices.map((choice, index) => {
                      return (
                        <div
                          className="company-data-radio-container"
                          key={index}
                        >
                          <input
                            className="company-data-radio"
                            type="radio"
                            id={choice}
                            name={choice}
                            value={choice}
                          ></input>
                          <label
                            className="company-data-radio-label"
                            htmlFor=""
                          >
                            {choice}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="company-data-right-bottom">
          <div className="company-data-enigma-logo-container">
            <img
              className="modal-enigma-logo"
              src={Logo}
              alt="Enigma Data Logo"
            />
            <p>Powered by Enigma Data</p>
          </div>
          <button className="company-data-save-button">Save</button>
        </div>
      </div>
    </div>
  );
};
