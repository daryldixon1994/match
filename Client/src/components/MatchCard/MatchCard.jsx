import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";




const MatchCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="matchCard">
      <Card
        style={{
          width: "18rem",
          paddingTop: "20px",
          color: "#a3abb8",
          height: "21rem",
        }}
      >
        <Card.Title style={{ textAlign: "center", color: "#ef233c" }}>
          Match Name
        </Card.Title>
        <Card.Body
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <center>
            <div style={{ marginBottom: "20px" }} className="tt">
              <FontAwesomeIcon icon={faMapMarker} color="#ef233c" />
              <h5 style={{ margin: "10px" }}>STADE ADRESSE</h5>
              <FontAwesomeIcon icon={faClock} color="#ef233c" />{" "}
              <h6 style={{ margin: "10px" }}>18:00</h6>
              <FontAwesomeIcon icon={faUsers} color="#ef233c" />
              <h6 style={{ margin: "10px" }}>5/10</h6>
            </div>
          </center>

          <Button
            variant="primary"
            style={{
              backgroundColor: "crimson",
              border: "1px solid crimson",
            }}
            onClick={handleShow}
          >
            Join
          </Button>
        </Card.Body>
      </Card>
      {/*  Join Modal */}
      <Modal className="modale" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CREATE A MATCH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Full Name</label>
          <input type="text" />
          <label htmlFor="">Phone Number</label>
          <input type="number" />
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Join Match
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MatchCard;
