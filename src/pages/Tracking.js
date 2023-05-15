import { useLocation } from 'react-router-dom';

import '../style/Nav.css';
import Header from '../components/Header';
import image from "../img/laptop_icon.png";

function Tracking()
{
    const location = useLocation();
    
    return(
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
                        Add Tracking
                        </button>
                        <label htmlFor="add-box" className="fas fa-plus"></label>
                    </div>
                    <div className="tracking-form">
                        <button className="tracking">Laptops</button>
                        <label htmlFor="add-box"><img src={image} alt='Not found'></img></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tracking;