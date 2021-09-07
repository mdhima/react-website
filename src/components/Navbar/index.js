import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Magdalena</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Music' activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-75}>Music</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Videos' smooth={true} duration={500} spy={true} exact='true' offset={-75}>Videos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Places' smooth={true} duration={500} spy={true} exact='true' offset={-75}>Places</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Movies' smooth={true} duration={500} spy={true} exact='true' offset={-75}>Movies</NavLinks>
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
