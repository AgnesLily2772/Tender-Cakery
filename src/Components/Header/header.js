import React from 'react';
import logo from '../../images/logo1.png';
import './styles.css';
const Header = () => {
  return(
    <div className='container  py-5'>
        <div className='row'>
          <div className='col'><a href='#'><h5>Birthday</h5></a></div>
          <div className='col'><a href='#'><h5>Anniversary</h5></a></div>
          <div className='col'><a href='#'><h5>Wedding</h5></a></div>
          <div className='col'><a href='#'><h5>IceCream</h5></a></div>
          <div className='col'><a href='#'><h5>Bakery</h5></a></div>
          {/* <div className='col '><img src={logo} alt="not found"/></div> */}

          <div className='col'><a href='#'><h5>QuickFoods</h5></a></div>
          <div className='col'><a href='#'><h5>Reviews</h5></a></div>
          <div className='col'><a href='#'><h5>Blogs</h5></a></div>
          <div className='col'><a href='#'><h5>ContactUs</h5></a></div>
      </div>
    </div>
      ) 
};

export default Header;
