import React from 'react'
import style from './Header.module.css'
import { LuTicketPercent } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Bs2CircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";





const Header = () => {
  return (
    <div className={style.header}>
         {/*section notification-bar  starts here  */}
        <section className={style.notification}>
           <div className={style.icontext}>
           <LuTicketPercent className={style.icon} />
           <p >30% off storewide — Limited time! </p>
           </div>
           <a className={style.shop} href="#">Shop Now <FaArrowRight /> </a>
           <FaXmark className={style.close} />


        </section>
        {/*section notification-bar  ends here  */}
        {/* navigation bar start here */}
        <section className={style.navigation}>
          <div className={style.logo}>
            <FaBars className={style.bar} />


            <div className={style.mobilemenu}>
              <div className={style.mobilemenu1}>

                <h2>3legant</h2>
                <FaXmark />

              </div>
              <input type="text" placeholder='  Search ' />
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#" className={style.link}> Shop <FaAngleDown />
                </a></li>
                <li><a href="#" className={style.link}> Product <FaAngleDown />
                </a></li>
                <li><a href="#"> Contact Us </a></li>
              </ul>
              <div className={style.footermobile}>
                <ul>
                  <li><a href="#">Cart <MdOutlineShoppingBag />   </a></li>
                  <li><a href="#">Wishlist  <MdOutlineShoppingBag /> </a></li>
                </ul>
                <div className={style.mobileicons}>
                <FaInstagram />
                <FaInstagram />


                </div>

              </div>



            </div>
            
            <a href="#">3legant.</a>
          </div>
         
            <ul className={style.navlinks}>
              <li><a href="#" className={style.active}>Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>

          
          <div className={style.iconcontainer}>
            <div className={style.icon1}>
            <HiMagnifyingGlass />
            <FaRegCircleUser />


            </div>
            <div className={style.icon2}> 
            <MdOutlineShoppingBag />
            <Bs2CircleFill />





            </div>
          </div>

        </section>

        
    </div>
  )
}

export default Header