import React from 'react'
import './Sqi.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Sqi6 = () => {
  return (
    <div>
      <footer>
        <div className='footercontainer'>
          <div className='footersubcon1'>
            <span>Hello, we’re SQI College of ICT</span>
            <small>We provide and lead others in quality ICT education.</small>
            <div className='footericons'>
             <FaFacebookF />
             <FaXTwitter />
             <FaLinkedinIn />
             <FaYoutube />
             <FaInstagram />
            </div>
            <small>Send us a mail <br /><strong>enquiry@edu.sqi.ng</strong></small>
           
          </div>

          <div className='footersubcon2'>
            <span>Quick Links</span>
            <small>Application Portal</small>
            <small>Student Portal</small>
            <small>Professional Courses</small>
            <small>NID Courses</small>
            <small>Campus Info</small>
            <small>Accomodation</small>
            <small>SQI Scholarship</small>
            <small>Donate</small>
          </div>

          <div className='footersubcon3'>
            <span>Ogbomoso</span>
            <small>Old Ilorin Road,<br />
            Opposite Yoaco Filling Station, <br />
            Yoaco, Ogbomoso</small>
            <strong>0906 281 9991, 0906 281 9993</strong>
            <p>Locate on the map</p>
          </div>

          <div className='footersubcon4'>
            <span>Ibadan</span>
            <small>
            First Floor, H25 Heritage Mall,
            Opposite Central Bank <br />of Nigeria,
            Dugbe, Ibadan.
            </small>
            <strong>0906 281 9994</strong>
            <p>Locate on the map</p>
            <small>
            Christianah Oyinade <br /> Ajoke House, beside <br /> First Bank, Arisekola <br /> Central Mosque, Opposite Jaiz bank, Idi <br /> Ape, Iwo road, Ibadan.
            </small>
            <strong>0906 281 9995</strong>
            <p>Locate on the map</p>
            <small>
            Haier Thermocool <br /> Building, opposite SAO <br /> filling station, <br />Challenge, Ibadan, Oyo <br />State.
            </small>
            <strong>0906 281 9994</strong>
            <p>Locate on the map</p>
          </div>

          <div className='footersubcon5'>
           <span>Abeokuta</span>
            <small>
            First floor, OPIC Tower building, Okeilewo, Abeokuta.
            </small>
            <strong>0906 281 9996</strong>
            <p>Locate on the map</p>
           <span>Osogbo</span>
            <small>
            Opposite Jaiz bank,<br /> Ogo-Oluwa, Osogbo
            </small>
            <strong>0906 281 9997</strong>
            <p>Locate on the map</p>
          </div>
        </div>
      </footer>

      <div className='lastdiv'>
        <div className='copyright'> 
        <span>Copyright © 2025 | SQI ICT Consultants. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Sqi6