import './header.css';
import '../../img/tracking_icon.png'
const Header = ({title, second}) => { //de
    
  
    return (
      <>
        <div className="header">
          <h1>{title}</h1>
        </div>
        <div className="container">
          <div className="search-form">
              <div className="search-input">
                <input placeholder="Search..." id="search-box"/>
                <label htmlFor="search-box" className="fas fa-search"></label>
              </div>
              <div className="add-input">
                <button className="add" id="add-box">
                  Add {title}
                </button>
                <label htmlFor="add-box" className="fas fa-plus"></label>
              </div>
              <div className="tracking-form">
                  <button className="tracking">{second}</button>
                  <label htmlFor="add-box" className=""><img src='././img/tracking_icon.png'></img></label>
              </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Header;
