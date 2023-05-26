import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/Modal.css';
// import { Form } from "react-router-dom";
function Example() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Add Tracking
      </button>
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl" // Cambia el tamaño del modal a grande
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton className="custom-header">
          <Modal.Title className="centered-title">Add Tracking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-form">
              <div className=" fields labels">
                <label htmlFor="id">ID :</label>
                <label htmlFor="employee">Employee :</label>
                <label htmlFor="exit">Exit Date :</label>
                <label htmlFor="created">Created at :</label>
              </div>
              <div className=" fields inputs">
                <input type="text" id="id" placeholder="ID"></input>
                <input type="text" id="employee" placeholder="Employee"></input>
                <input type="date" id="exit"></input>
                <input type="date" id="created"></input>
              </div>
              <div className=" fields labels">
                <label htmlFor="laptop">Laptop ID :</label>
                <label htmlFor="return">Return Date :</label>
                <label htmlFor="updated">Updated at :</label>
              </div>
              <div className=" fields inputs">
                <input type="text" id="laptop" placeholder="Laptop"></input>
                <input type="date" id="return"></input>
                <input type="date" id="updated"></input>
              </div>
            </div>
            <div>
                <label htmlFor="notes">Notes :</label>
                <input type="text" id="notes" placeholder="Notes"></input>
            </div>
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}
  
export default Example;