import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/enigma-logo.svg";
import "./Modal.css";

export const Modal = (props) => {
  const { isAccepted, company = "IHOP" } = props;
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (company) {
      getModalData();
    }
  }, [company]);

  async function getModalData() {
    try {
      let resp = await axios.get(
        "https://enigma-data-server-production.up.railway.app/get-enigma-modal-data",
        {
          params: {
            company: company,
          },
        }
      );
      setModalData(resp.data);
    } catch (error) {
      console.log("Error from Enigma Data:", error);
    }
  }

  function handleButtonClick(acceptedStatus) {
    isAccepted(acceptedStatus);
  }

  if (!modalData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="modal-container">
      <div className="modal-image-container">
        <img className="modal-image" src={modalData.company_img} alt="logo" />
      </div>
      <h1>{modalData.modal_header}</h1>
      <h3>{modalData.modal_sub_header}</h3>
      <p className="modal-description">{modalData.modal_description}</p>
      <div className="modal-button-container">
        <button
          className="modal-buttons"
          style={{
            backgroundColor: `#${modalData?.primary_color}`,
            color: "white",
          }}
          onClick={() => handleButtonClick(false)}
        >
          No Thanks
        </button>
        <button
          className="modal-buttons"
          style={{
            backgroundColor: `#${modalData?.primary_color}`,
            color: "white",
          }}
          onClick={() => handleButtonClick(true)}
        >
          Let's Go!
        </button>
      </div>
      <div>
        <img className="modal-enigma-logo" src={Logo} alt="Enigma Data Logo" />
        <p
          style={{
            fontSize: "10px",
          }}
        >
          Powered by Enigma Data
        </p>
      </div>
    </div>
  );
};
