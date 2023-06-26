import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


import Modal from 'react-bootstrap/Modal';
import '../style/Modal.css';

import image1 from "../img/save_icon.png";
import image2 from "../img/laptop_icon.png";
import image3 from "../img/tracking_icon.png";
import image4 from "../img/plus_icon.png";

function TrackingModal() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const navigate = useNavigate();

  const link = () => {
      navigate('/Laptops');
    };
  
  const [laptopID,setLaptopId] = useState('');
  const [employee,setEmployee] = useState('');
  const [exit_date, setExitDate] = useState('');
  const [notes,setNotes] = useState('');

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    const data = {laptopID,employee, exit_date, notes};
    fetch('http://tc.crc.global:3001/api/trackings/',{
      method: 'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    }).then(() => {
      console.log(data);
      window.location.reload();
    });
  }

  return (
    <> 
      {/* x ? a:(xx ? c: b) */}
      <div className="add-input" onClick={handleShow}>
        <button variant="primary" className="div-button" >
          Add Tracking
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
          <Modal.Title className="centered-title">Add Tracking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <div className="modal-body">
            <div className="row mt-3 mb-2">
              <div className="col-lg-4">
                <label htmlFor="" className="mb-2">Laptop ID : </label>
                <input type="text" className="form-control" placeholder="" value={laptopID} onChange={(e) => setLaptopId(e.target.value)}/>
                <br />
              </div>
              <div className="col-lg-5">
                <label htmlFor="" className="mb-2">Employee: </label>
                <input type="text" className="form-control" placeholder="" value={employee} onChange={(e) => setEmployee(e.target.value)}/>
                <br />
              </div>
              <div className="col-lg-3">
                <label htmlFor="" className="mb-2">Exit Date: </label>
                <input type="date" className="form-control" value={exit_date} onChange={(e) => setExitDate(e.target.value)}/>
                <br />
              </div>
            </div>
            <div className="row">
              {/* <div className="col-lg-4">
                <label htmlFor="">Exit Date: </label>
                <input type="date" className="form-control"/>
                <br />
              </div> */}
              {/* <div className="col-lg-4 date">
                <label htmlFor="">Return Date: </label>
                <input type="date" className="form-control "  />
                <br />
              </div> */}
            </div>
            {/* <div className="row">
              <div className="col-lg-4 ">
                <label htmlFor="">Created at: </label>
                <input type="date" className="form-control " />
                <br />
              </div>
              <div className="col-lg-4 date">
                <label htmlFor="">Updated at: </label>
                <input type="date" className="form-control " />
                <br />
              </div>
            </div> */}
            <div className="col-lg-12">
                <label htmlFor="" className="mb-2">Notes: </label>
                <input type="text" className="form-control notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
                <br />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="search-form">
          <div className="form" variant="primary" onClick={handleSubmit}>
              <button className="tracking" >Save</button>
              <label htmlFor="add-box"><img src={image1} alt="not found"></img></label>
           </div>
          <div className="form" variant="primary" onClick={link}>
              <button className="tracking" >Laptops</button>
              <label htmlFor="add-box"><img src={image2} alt="not found"></img></label>
           </div>
          <div className="form" variant="primary" onClick={handleClose}>
              <button className="tracking" >Close</button>
              <label htmlFor="add-box"><img src={image3} alt="not found"></img></label>
           </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default TrackingModal;