import React from 'react';
import styled, {css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { BiMenuAltRight } from "react-icons/bi"

const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
background-color: red;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic; 
`

const MenuBars = styled(BiMenuAltRight) `
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
    
`;

const NavMenu = styled.div `
display: flex;
algin-items: center;
margin-right: -48px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
    display: none;
}
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">EIXL</Logo>
            <MenuBars />
            <NavMenu>
                { menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
           <NavBtn>
               <Button to="/contact" primary='true '>
                   Contact Us
               </Button>
           </NavBtn>
        </Nav>
    )
}

export default Navbar;
