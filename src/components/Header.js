import logo from '../../images/logo.png';
export const Header = ()=>{
    return (
        <div div className="nav">
            <div className="logo-container">
               <img  className="logo" src= {logo}  />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li  className="item">Home</li>
                    <li className="item">About us</li>
                    <li className="item">Contact us</li>
                </ul>

            </div>
       </div>
    );
};