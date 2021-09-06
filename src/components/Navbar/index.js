import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Magdalena</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Music'>Music</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Videos'>Videos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Places'>Places</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Movies'>Movies</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={{ pathname: "https://www.youtube.com/watch?v=Nl54MJDR2p8" }} target="_blank">Source</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
