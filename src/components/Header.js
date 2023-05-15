import '../style/Header.css';

function Header(props)
{
    const {location} = props;

    var pageTitle = location.pathname.split('/').pop();

    if(pageTitle === "")
    {
        pageTitle = "Laptops";
    }
    
    return (
        <div className='header'>
            <h1>{pageTitle}</h1>
        </div>
    )
}

export default Header;