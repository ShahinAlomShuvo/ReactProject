import React, { useEffect, useState } from "react";
import "../../Assets/Css/style.css";
import "../../Assets/Css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoOne from "../../Assets/Image/3.svg";
import logoTwo from "../../Assets/Image/4.svg";

const TopNavBar = () => {
  const [nav, setNav] = useState({
    brand: "navBarBrandTitle",
    logo: logoOne,
    background: "navBar",
    items: "navItems",
    variant: "dark",
  });

  const onScroll = () => {
    if (window.scrollY > 100) {
      setNav({
        brand: "navBarBrandTitleScroll",
        logo: logoTwo,
        background: "navBarScroll",
        items: "navItemsScroll",
        variant: "light",
      });
    } else if (window.scrollY < 100) {
      setNav({
        brand: "navBarBrandTitle",
        logo: logoOne,
        background: "navBar",
        items: "navItems",
        variant: "dark",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        fixed='top'
        collapseOnSelect
        expand='lg'
        className={nav.background}
        variant={nav.variant}
      >
        <Container>
          <Navbar.Brand className={nav.brand} href='http://localhost:3000/'>
            <NavLink to='/' className={nav.items}>
              <img className='navLogo' src={nav.logo} alt='' /> Mr. Shahin
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link>
                <NavLink to='/' className={nav.items}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/service' className={nav.items}>
                  Service
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/course' className={nav.items}>
                  Course
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/portfolio' className={nav.items}>
                  Portfolio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/contact' className={nav.items}>
                  Contact
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/about' className={nav.items}>
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavBar;
