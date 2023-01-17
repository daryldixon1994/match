import React, { useState } from "react";
import "./Main.css";
import { Modal, Button } from "react-bootstrap";

const Main = ({ scrollToBottom }) => {
  const cities = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    " Mahdia",
    "Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main">
      <h1>WELCOME</h1>
      <h3>YOU CAN NOW</h3>

      <div className="btns">
        <button onClick={scrollToBottom}>JOIN A MATCH</button>
        <h5>or</h5>
        <button onClick={handleShow}>CREATE A MATCH</button>
      </div>

      {/* Modal */}
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CREATE A MATCH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Match Owner</label>
          <input type="text" />
          <label htmlFor="">Phone Number</label>
          <input type="number" />
          <label htmlFor="">Match Name</label>
          <input type="text" />
          <label htmlFor="">Players Number</label>
          <input type="number" />
          <label htmlFor="">City</label>
          <select>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <label htmlFor="">Stade</label>
          <input type="text" />
          <label htmlFor="">Date and time</label>
          <input type="datetime-local" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Main;
