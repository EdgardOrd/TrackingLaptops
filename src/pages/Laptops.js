//Hooks

import { useLocation } from 'react-router-dom';
import { useNavigate }  from 'react-router-dom'; 


//Style 
import '../style/Nav.css';


//Components
import Header from '../components/Header';
import Table from '../components/LaptopTable';

//Image
import image1 from "../img/plus_icon.png";
import image2 from "../img/search_icon.png";
import image3 from "../img/tracking_icon.png";


function Laptops()
{
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
                        <input placeholder="Search..." id="search-box"/>
                        <label htmlFor="search-box"><img src={image2} alt="not found"></img></label>
                    </div>
                    <div className="add-input">
                        <button className="add" id="add-box">
                            
                        Add Laptops
                        </button>
                        <label htmlFor="add-box"><img src={image1} alt="not found"></img></label>
                    </div>
                    <div className="tracking-form">
                        
                        <button className="tracking" onClick={link}>Tracking</button>
                        <label htmlFor="add-box"><img src={image3} alt="not found"></img></label>
                    </div>
                </div>
                
                <Table/>
            </div>
            
            
        </>
    )
}

export default Laptops;