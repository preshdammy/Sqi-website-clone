import React from 'react'
import './Sqi.css';
import { IoIosArrowDown } from "react-icons/io";

const Sqi11 = () => {
  return (
    <div>
      <nav>
        <div className='navlogo'>
          <img src="/sqiimgs01.jpg" alt="Logo" className='logo' />
        </div>
        <div className='navtext'>
          <div className='navsubtext1'>About <IoIosArrowDown />
             <div className='navdropdown'>
              <div className='navdroptext'>Our story</div>
              <div className='navdroptext'>Our Team</div>
              <div className='navdroptext'>Campus info</div>
             </div>
          </div>
          <div className='navsubtext2'>Programmes <IoIosArrowDown />
          <div className='navdropdown1'>
              <div className='navdroptext1'>National Innovation Diploma</div>
              <div className='navdroptext1'>Professional Diploma Programme</div>
              <div className='navdroptext1'>Executive Professional Certificate Programme</div>
             </div>
          </div>
          <div className='navsubtext3'>Admissions <IoIosArrowDown />
          <div className='navdropdown2'>
              <div className='navdroptext2'>Apply for a Programme</div>
              <div className='navdroptext22'>Mode of Study</div>
              <div className='navdroptext22'>Tuition</div>
              <div className='navdroptext2'>Frequently asked Questions</div>
             </div>
          </div>
          <div className='navsubtext4'>E-portals <IoIosArrowDown />
          <div className='navdropdown3'>
              <div className='navdroptext3'>Student</div>
              <div className='navdroptext3'>Staff</div>
             </div>
          </div>
          <div className='navsubtext5'>SQI Scholarship</div>
          <div className='navsubtext'>News</div>
        </div>
      </nav>

      <section className='section1'>
        <div className='sectiontxt1'>
          <div className='h1'><h1>Study to become a global talent</h1></div>
          <span>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</span>
          <button>Start now</button>
        </div>
        <div className='sectionimg1'>
          <img src="/sqiimgs03.png" alt="Logo" />
        </div>

        <div className='log'>
          <div className='logimg'> 
            <img src="/facerb.png" alt="Logo" className='face'/>
          </div>
         <div  className='logimg'>
          <img src="/tweet.png" alt="Logo" className='tweet' />
         </div>
         <div  className='logimg'>
           <img src="/linkedinn.png" alt="Logo" className='tweet' />
         </div>
        </div>

        <div className='logg'>
         <div className='whatsapp'><img src="/whater.png" alt="Logo" /></div>
         <div className='help'>Need help? <strong>Chat with us</strong></div>
        </div>
      </section>

    </div>
  )
}

export default Sqi11