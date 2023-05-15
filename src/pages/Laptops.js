import { useLocation } from 'react-router-dom';

import '../style/Nav.css';

import Header from '../components/Header';
import Table from '../components/LaptopTable';

import image from "../img/tracking_icon.png";


function Laptops()
{
    const location = useLocation();
    
    console.log(location)
    return (
        <>
            <Header location={location}/>
            <div className="container">
                <div className="search-form">
                    <div className="search-input">
                        <input placeholder="Search..." id="search-box"/>
                        <label htmlFor="search-box" className="fas fa-search"></label>
                    </div>
                    <div className="add-input">
                        <button className="add" id="add-box">
                        Add Laptops
                        </button>
                        <label htmlFor="add-box" className="fas fa-plus"></label>
                    </div>
                    <div className="tracking-form ">
                        <button className="tracking">Tracking</button>
                        <label htmlFor="add-box"><img src={image} alt="not found"></img></label>
                    </div>
                    
                </div>
                <Table/>
            </div>
            
        </>
    )
}

export default Laptops;