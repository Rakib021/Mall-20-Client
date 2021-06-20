
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Footer.css'

const Footer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="main-footer">
            <div className="container"> 
             <div className="row" > 
                <div className="col">
                    <h4> MALL-20 </h4>
                    <ul className="list-unstyled">
                        <li> 321-654-987 </li>
                        <li> mail_us@mall-20.com </li>
                        <li> Chattogram, Bangladesh </li>
                        
                    
                    </ul>
                </div>
                <div className="col">
                    <h4> Service </h4>
                    <ul className="list-unstyled"> 
                    <li> Delivery </li>
                   <Link to='/orders' style={{textDecoration: 'none'}}> <li  > Order Status </li> </Link>
                    <li> Customer Care </li>
                    </ul> 
                </div>
                <div className="col">
                    <h4> Store </h4>
                    <ul className="list-unstyled"> 
                   <Link to='/home' style={{textDecoration: 'none'}}> <li> Products </li> </Link>
                   <Link to='/deals' style={{textDecoration: 'none'}}> <li> Best Deal </li></Link>
                    <li> Become a Dealer </li>
                    </ul> 
                </div>
                <div className="col">
                    <h4>Customer </h4>
                    <ul className="list-unstyled"> 
                    {loggedInUser.email ? (
              <li className=" text-dark ml-1">
              {loggedInUser.name}
              </li>
            ) : (
              <Link to="/login" style={{textDecoration: 'none'}}> 
                <li className=" text-dark ml-1">
                No Customer Signed in
                </li>
              </Link>
            )}
                    </ul> 
                </div>  
             </div>
             <hr/>
             <div className="row"> 
              <p className="col-sm"> 
               <small class="text-muted"> &copy;{new Date().getFullYear()} MALL-20 Limited | All rights reserved | Terms of Service | Privacy Policy </small>
                </p>
             </div>
             </div>
        </div>
    );
};

export default Footer;