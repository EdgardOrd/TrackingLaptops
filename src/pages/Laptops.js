//Hooks
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

//Style 
import '../style/Nav.css';


//Components
import Header from '../components/Header';
import Table from '../components/LaptopTable';
import LaptopModal from '../components/LaptopModal';
//Image
import image1 from "../img/plus_icon.png";
import image2 from "../img/search_icon.png";
import image3 from "../img/tracking_icon.png";


function Laptops()
{
    const [searchText, setSearchText] = useState('');

    // ...

    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };
    const location = useLocation();
    
    const navigate = useNavigate();

    const link = () => {
        navigate('/Tracking');
    };
    
    return (
        <>
            <Header location={location}/>
            <div className="container">
                <div className="search-form">
                    <div className="search-input">
                        <input placeholder="Search..." value={searchText} onChange={handleSearchInputChange}/>
                        <label htmlFor="search-box"><img src={image2} alt="not found"></img></label>
                    </div>
                    <LaptopModal/>
                    <div className="tracking-form" onClick={link}>
                        <button className="div-button" >Tracking</button>
                        <label htmlFor="add-box"><img src={image3} alt="not found"></img></label>
                    </div>
                </div>
                
                <Table searchText={searchText}/>
            </div>
            
            
        </>
    )
}

export default Laptops;