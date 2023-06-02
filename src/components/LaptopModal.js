import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


import Modal from 'react-bootstrap/Modal';
import '../style/Modal.css';


import image1 from "../img/save_icon.png";
import image2 from "../img/laptop_icon.png";
import image3 from "../img/laptop_icon.png";
import image4 from "../img/plus_icon.png";

function LaptopModal() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const navigate = useNavigate();

    const link = () => {
        navigate('/Laptops');
    };

  return (
    <> 
      {/* x ? a:(xx ? c: b) */}
      <div className="add-input" onClick={handleShow}>
        <button variant="primary" className="div-button">
          Add Laptop
        </button>
        <label htmlFor="add-box"><img src={image4} alt='Not found'></img></label>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-xl" // Cambia el tamaño del modal a grande
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton className="custom-header">
          <Modal.Title className="centered-title">Add Laptop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">
          <div className="row mt-3 mb-2">
            <div className="col-lg-4">
              <label htmlFor="" className="mb-2">Serie : </label>
              <input type="text" className="form-control" placeholder=""/>
              <br />
            </div>
            <div className="col-lg-2">
              <label htmlFor="" className="mb-2">Brand: </label>
              <input type="text" className="form-control" placeholder="" />
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="" className="mb-2">Model: </label>
              <input type="text" className="form-control"/>
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="" className="mb-2">Color: </label>
              <input type="text" className="form-control"/>
              <br />
            </div>
          </div>
          <div className="row mt-3 mb-2">
            <div className="col-lg-6">
              <label htmlFor="" className="mb-2">Charger : </label>
              <input type="text" className="form-control" placeholder=""/>
              <br />
            </div>
            <div className="col-lg-2">
              <label htmlFor="" className="mb-2">Guest: </label>
              <input type="text" className="form-control" placeholder="" />
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="" className="mb-2">State: </label>
              <input type="text" className="form-control"/>
              <br />
            </div>
           
          </div>
          
          
        </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="search-form">
          <div className="form" variant="primary" onClick={handleClose}>
              <button className="Laptop" >Save</button>
              <label htmlFor="add-box"><img src={image1} alt="not found"></img></label>
           </div>
          <div className="form" variant="primary" onClick={link}>
              <button className="Laptop" >Laptops</button>
              <label htmlFor="add-box"><img src={image2} alt="not found"></img></label>
           </div>
          <div className="form" variant="primary" onClick={handleClose}>
              <button className="Laptop" >Close</button>
              <label htmlFor="add-box"><img src={image3} alt="not found"></img></label>
           </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
  
export default LaptopModal;