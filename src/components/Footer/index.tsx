import React from 'react'
import facebook from '../../../public/images/facebook.svg'
import instagram from '../../../public/images/instagram.svg'
import logo from '../../../public/images/logo.svg'
import Location from '../../../public/images/Location.svg'
import phone from '../../../public/images/phone.svg'
import Message from '../../../public/images/Message.svg'
import Image from "next/image";
import { Nunito } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

const index = () => {
  return (
    <div className='footer-div flex flex-col'>
          <div className='main-footer grid md:grid-cols-2'>
      <div className='card footer-section1 flex justify-center'>
      <div className='footer-content1 flex flex-col justify-evenly'>
        <div className='footer-component1 flex items-center'>
            <div className='logo-img'>
            <Image src={logo} alt="logo" className='icon-1'/>
            </div>
            <div className='logo-name flex items-center'>
              <p className='text1 text-xs font-bold font-[Nunito]'>CENTRE FOR SCHOOL <br /> HEALTH EDUCATION AND ENVIRONMENTAL HYGIENE</p>
            </div>
          </div>
          <div className='footer-component2 flex'>
            <div className='icon-img'>
            <div className='img-icon'>
            <Image src={Location} alt="Location" className='icon-1'/>
            </div>
            </div>
            <div className='text-content'>
              <p className='text2 text-xs'>Centre for School Health Education and Environmental Hygiene (CSHEEH) <br />
Sentosa Park, Near Fire Service, Zone A 1st Gate, Legislative Quarters, <br /> Apo, Abuja.</p>
            </div>
          </div>
           <div className='footer-component3 flex'>
            <div className='icon-img'>
            <div className='img-icon'>
            <Image src={Message} alt="Message" className='icon-1'/>
            </div>
            </div>
            <div className='text-content'>
              <p className='text3 text-xs'>info@csheehnigeria.org</p>
            </div>
            </div>
          <div className='footer-component4 flex'>
            
          <div className='icon-img'>
            <div className='img-icon'>
            <Image src={phone} alt="phone" className='icon-1'/>
            </div>
          </div>
            <div className='text-content'>
              <p className='text3 text-xs'>+234 803 787 1487; +234 805 356 3370</p>
            </div>

            </div>
      </div>
        

      </div>
      <div className='card footer-section2 flex justify-center items-center'>
      <div className='footer-content2 flex flex-col items-end justify-between'>
      <div className='footer-component5 flex justify-between'>
            <div className='footer-nav-items'>
              <a href="">ABOUT US</a>
            </div>
            <div className='footer-nav-items'>
              <a href="">GET INVOLVED</a>
            </div>
            <div className='footer-nav-items'>
              <a href="">MEDIA</a>
            </div>
            <div className='footer-nav-items'>
              <a href="">CONTACT US</a>
            </div>
          </div>
          <div className='footer-component6 flex justify-between items-center'>
            <div className='logo-img1'>
            <Image src={facebook} alt="facebook" className='icon-1'/>

            </div>
            <div className='logo-img1'>
            <Image src={instagram} alt="instagram" className='icon-1'/>
            </div>
            </div>
      </div>

</div>

    </div>
    
    <div className='copyright-section'>

</div>

    </div>

  )
}

export default index


