//Hooks
import { useLocation, useNavigate,  } from 'react-router-dom';
import { useState } from 'react';
//Style 
import '../style/Nav.css';
//Components
import Header from '../components/Header';
import Table from '../components/TrackingTable';
import TrackingModal from '../components/TrackingModal';

//Image
import image1 from "../img/search_icon.png";
import image2 from "../img/plus_icon.png";
import image3 from "../img/laptop_icon.png";

function Tracking()
{

    const [searchText, setSearchText] = useState('');
    
    const handleSearchInputChange = (event) =>   {
        setSearchText(event.target.value);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const location = useLocation();

    const navigate = useNavigate();

    const link = () => {
        navigate('/Laptops');
    };
    
    return(
        <>
            <Header location={location}/>
            <div className="container">
                <div className="search-form">
                    <div className="search-input">
                        <input placeholder="Search..." id="search-box"  value={searchText} onChange={handleSearchInputChange}/>
                        <label htmlFor="search-box"><img src={image1} alt='Not found'></img></label>
                    </div>
                    <div className="add-input">
                        <button onClick={handleOpenModal} className="add" id="add-box">
                            
                            Add Tracking
                        </button>
                        <TrackingModal isOpen={isModalOpen} onClose={handleCloseModal}/>
                        <label htmlFor="add-box"><img src={image2} alt='Not found'></img></label>
                    </div>
                    <div className="tracking-form" onClick={link}>
                        <button className="tracking" >Laptops</button>
                        <label htmlFor="add-box"><img src={image3} alt='Not found'></img></label>
                    </div>
                </div>
                <Table searchText={searchText}/>
            </div>
        </>
    )
}

export default Tracking;