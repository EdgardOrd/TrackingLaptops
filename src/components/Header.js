import '../style/Header.css';

function Header({title})
{
    let pageTitle = title;

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