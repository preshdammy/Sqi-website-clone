import React from 'react'
import './Sqi.css';
import { FaReact } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";
import { CgToolbox } from "react-icons/cg";
import { SlBookOpen } from "react-icons/sl";
import { FaBook } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { TbWavesElectricity } from "react-icons/tb";

const Sqi4 = () => {
  return (
    <div>
      <section className='section6'>
        <div className='sec6container'>
          <img src="/sqiimgs23.jpg" alt="Logo" />
          <div className='blue'></div>
          <div className='white'> </div>
          <div className='sec6text'>
            <span>Take a tour</span>
            <small>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.</small>
            <div className='apply'> Apply now </div>
          </div>
        </div> 

      </section>

      <section className='section7'>
        <div className='sec7container'>
          <div className='sec7subcontainer'>
            <div className='sec7text'>
              <h2>Why study at SQI?</h2>
            </div>
            <div className='sec7container2'>
              <div className='sec7con1'>
                <div className='sec7subcon'>
                 <FaReact className='icon'/>
                 <span>Project Based Learning</span>
                 <small>Our courses are practical, hands-on learning. Practice and apply knowledge with real world projects that contribute largely to your portfolio.</small>
                </div>
                <div className='sec7subcon'>
                 <TbWavesElectricity  className='icon' />
                 <span>Physical & Virtual Class</span>
                 <small>You can now choose physical class experience or online classroom and learn from anywhere in the world.</small>
                </div>
                <div className='sec7subcon'>
                  <FaCertificate  className='icon'/>
                  <span>Certification</span>
                 <small>Be certified by an accredited and globally recognized institution. SQI got its accreditation in Sept 2021 from the NBTE, Nigeria.</small>
                </div>
                <div className='sec7subcon'>
                  <CgToolbox  className='icon' />
                  <span>Job Opportunity</span>
                 <small>78.5% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles</small>
                </div>
              </div>
              <div className='sec7con2'>
                <div className='sec7subcon'>
                 <FaBookReader  className='icon'/>
                 <span>Expert Instructors</span>
                 <small>Get to interact with different mentors and draw from their loads of experience.</small>
                </div>
                <div className='sec7subcon'>
                 <SlBookOpen  className='icon' />
                 <span>Free access to our hub and community</span>
                 <small>You will have access to our fully functional hub for co-working and working on projects, assignments and even begin a start-up.</small>
                </div>
                <div className='sec7subcon'>
                 <IoChatbubbles  className='icon' />
                 <span>Alumni Support</span>
                 <small>Our students have access to alumni who currently work at top tech organizations in the world such as Google, Microsoft, Interswitch etc.</small>
                </div>
                <div className='sec7subcon'>
                  <FaBook  className='icon'/>
                  <span>Access to study materials</span>
                 <small>Students have access to prerecorded videos and resources they can make use of to further solidify their knowledge.</small>
                </div>
              </div>
            </div>
          </div>

          <div className='sec7img'> 
            <img src="/sqiimgs32.jpg" alt="Logo" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sqi4