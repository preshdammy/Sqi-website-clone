import React from 'react'
import './Sqi.css';
import { IoIosArrowForward } from "react-icons/io";

const Sqi3 = () => {
  return (
    <div>
      <section className='section4'>
        <div className='sec4container1'>
          <div className='sec4text'>
            <span>Our Top Courses</span>
            <p>Take a look at some of our popular courses</p><br /><br />
            <div className='view'><small>View all courses <IoIosArrowForward className='arrow'/></small></div>
          </div>
          <div className='sec4subcontainer1'>
            <img src="/sqiimgs07.webp" alt="Logo" />
            <h2>Software Engineering</h2>
            <span>Software Engineering is one of the most in-demand jobs across the globe today. <br /><br />
            Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</span>
            <div className='learnmore'><small>Learn More <IoIosArrowForward /></small></div>
          </div>
          <div className='sec4subcontainer2'>
           <img src="/sqiimgs09.jpg" alt="Logo" />
            <h2>UI/UX – Product Design</h2>
            <span>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users. <br /><br />
            Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</span>
            <div className='learnmore'><small>Learn More <IoIosArrowForward /></small></div>
          </div>
        </div>

        <div className='sec4container2'>
          <div className='sec4subcontainer3'>
           <img src="/sqiimgs08.jpg" alt="Logo" />
            <h2>Data Science & Analysis</h2>
            <span>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight. <br /><br />
           Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</span>
            <div className='learnmore'><small>Learn More <IoIosArrowForward /></small></div>
          </div>

          <div className='sec4subcontainer4'>
          <img src="/sqiimgs10.jpg" alt="Logo" />
            <h2>Digital Literacy</h2>
            <span>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs). <br /><br />
            Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</span>
            <div className='learnmore'><small>Learn More <IoIosArrowForward /></small></div>
          </div>
        </div>
      </section>

      <section className='section5'>
        <div className='sec5text'>
          <h2>Our alumni work at world-class <br /> companies around the world including</h2>
        </div>
        <div className='sec5container'>
         <div className='sec5imgcontainer'>
           <div className='sec5imgs'>
             <img src="/sqiimgs11.png" alt="Logo" />
           </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs12.png" alt="Logo" />
           </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs13.png" alt="Logo" />
           </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs14.png" alt="Logo" />
           </div>
         </div>

         <div className='sec5imgcontainer'>
           <div className='sec5imgs'>
             <img src="/sqiimgs15.png" alt="Logo" />
           </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs16.png" alt="Logo" />
           </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs17.png" alt="Logo" />
           </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs18.png" alt="Logo" />
           </div>
         </div>

         <div className='sec5imgcontainer'>
           <div className='sec5imgs'>
             <img src="/sqiimgs19.png" alt="Logo" />
            </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs20.png" alt="Logo" />
            </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs21.png" alt="Logo" />
            </div>
           <div className='sec5imgs'>
             <img src="/sqiimgs22.png" alt="Logo" />
            </div>
         </div>
        </div>
      </section>
    </div>
  )
}

export default Sqi3