import React from 'react';
import './styles.css';
import {FaPhoneAlt} from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';
import {GrFacebookOption} from 'react-icons/gr';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {TiSocialInstagram} from 'react-icons/ti';
import {CgProfile} from 'react-icons/cg';
import {BsCartFill} from 'react-icons/bs';
import {GoTriangleDown} from 'react-icons/go';
const Topper = () => {
  return(
    <div className='topper py-2'>
    <div className='container'>
      <div class="row">
        <div class="col one">
          <FaPhoneAlt></FaPhoneAlt>
          <button>+91-7200199994</button>
        </div>
        <div class="col two">
          <IoMdMail></IoMdMail>
          <button>feedback@backerspring.com</button>
        </div>
        <div class="col three"></div>
        <div class="col four">
          <div className='icons nav'>
            <div><GrFacebookOption style = {{marginLeft:'10px'}}></GrFacebookOption></div>
            <div><AiFillTwitterSquare style = {{marginLeft:'10px'}}></AiFillTwitterSquare></div>
            <div><TiSocialInstagram style = {{marginLeft:'10px'}}></TiSocialInstagram></div>
            <div><CgProfile style = {{marginLeft:'10px'}}></CgProfile></div>
            <div><GoTriangleDown style = {{marginLeft:'10px'}}></GoTriangleDown></div>
            <div><BsCartFill style = {{marginLeft:'10px'}}></BsCartFill></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Topper;
