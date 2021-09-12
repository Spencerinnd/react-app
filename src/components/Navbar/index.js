import React from 'react';
import Image from '../../img/happy.jpg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
    } from './NavbarElements';

    const Navbar = () => {
        return (
          <>
            <Nav>
              <NavLink to='/'>
              <img src={Image} height="100" width="100" alt="can't display happy girl"/>
              </NavLink>
              <Bars />
              <NavMenu>
                <NavLink to='/about' activeStyle>
                  About
                </NavLink>
                <NavLink to='/contact-us' activeStyle>
                  Contact Us
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                  Sign Up
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              </NavBtn>
            </Nav>
          </>
        );
      };
      
      export default Navbar;



<img src={Image} height="100" width="100" alt="can't display happy girl"/>