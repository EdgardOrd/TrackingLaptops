import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


import Modal from 'react-bootstrap/Modal';
import '../style/Modal.css';


import image1 from "../img/save_icon.png";
import image2 from "../img/tracking_icon.png";
import image3 from "../img/laptop_icon.png";
import image4 from "../img/plus_icon.png";

function LaptopModal() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const navigate = useNavigate();

    const link = () => {
        navigate('/Tracking');
    };

    const [series,setSeries] = useState('');
    const [brand,setBrand] = useState('');
    const [model, setModel] = useState('');
    const [color,setColor] = useState('');
    const [charger,setCharger] = useState('');
    const [guest,setGuest] = useState('');
    const [state, setState] = useState('');
    const [record,setRecord] = useState('');


    const handleSubmit = (e) => 
    {
      e.preventDefault();
      const data = {series,brand,model,color,charger,guest,record,state};
      fetch('http://tc.crc.global:3001/api/laptops/',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      }).then(() => {
        console.log(data);
        // window.location.reload();
      });
    }

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
              <input type="text" className="form-control" placeholder="Insert the laptop serial number" value={series} onChange={(e) => setSeries(e.target.value)}/>
              <br />
            </div>
            <div className="col-lg-2">
              <label htmlFor="" className="mb-2">Brand: </label>
              <input type="text" className="form-control" placeholder="" value={brand} onChange={(e) => setBrand(e.target.value)} />
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="" className="mb-2">Model: </label>
              <input type="text" className="form-control" value={model} onChange={(e) => setModel(e.target.value)}/>
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="" className="mb-2">Color: </label>
              <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)}/>
              <br />
            </div>
          </div>
          <div className="row mt-3 mb-2">
            <div className="col-lg-4">
              <label htmlFor="" className="mb-2">Charger : </label>
              <input type="text" className="form-control" placeholder="Insert the assigned charger serial number" value={charger} onChange={(e) => setCharger(e.target.value)}/>
              <br />
            </div>
            <div className="col-lg-2">
              <label htmlFor="" className="mb-2">Guest: </label>
              <input type="text" className="form-control" placeholder="Guest-#" value={guest} onChange={(e) => setGuest(e.target.value)}/>
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="" className="mb-2">Date: </label>
              <input type="date" className="form-control" placeholder="Guest-#" value={record} onChange={(e) => setRecord(e.target.value)}/>
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="" className="mb-2">State: </label>
              <select name="cars" className="form-control select" defaultValue={'USED'} value={state} onChange={(e) => setState(e.target.value)}>
                <option value="USED" >USED</option>
                <option value="NEW">NEW</option>
                <option value="DAMAGED">DAMAGED</option> 
              </select>
              <br />
            </div>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="search-form">
          <div className="form" variant="primary" onClick={handleSubmit}>
              <button className="Laptop" >Save</button>
              <label htmlFor="add-box"><img src={image1} alt="not found"></img></label>
           </div>
          <div className="form" variant="primary" onClick={link}>
              <button className="Tracking" >Trackings</button>
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