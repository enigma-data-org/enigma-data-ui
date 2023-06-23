import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Modal.css";

export const Modal = (props) => {
  const { isAccepted, company } = props;
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (company) {
      getModalData();
    }
  }, [company]);

  async function getModalData() {
    try {
      let resp = await axios.get(
        "http://localhost:3000/get-enigma-modal-data",
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

  function handleButtonClick() {
    isAccepted(true);
  }

  if (!modalData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="modal-container">
      <img src={modalData.company_img} alt="logo" />
      <h1>{modalData.modal_header}</h1>
      <h3>{modalData.modal_sub_header}</h3>
      <p className="modal-description">{modalData.modal_description}</p>
      <div className="modal-button-container">
        <button onClick={handleButtonClick}>No Thanks</button>
        <button onClick={handleButtonClick}>Let's Go!</button>
      </div>
    </div>
  );
};
