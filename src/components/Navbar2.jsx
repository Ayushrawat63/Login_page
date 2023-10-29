import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  align-self: start;
  width: 150px;
  color:white;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding: 1rem 3rem;
  position: relative;
  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavLinkWrapper = styled.div`
  @media (max-width: 704px) {
    display: ${(props) => (props.active ? "block" : "none")};
    text-align: center;
    padding: 2rem 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: white;
  margin-left: 2rem;
  &:last-child {
    background: green;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    &:hover {
      color: white;
    }
    &.${(props) => props.activeclassname} {
      color: white;
    }
  }
  &.${(props) => props.activeclassname} {
    color: green;
  }
  &:hover {
    color: green;
  }
  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;

const StyledFontAwesomeIcon = styled.div`
  display: none;
  position: absolute;
  right: 20px;
  top: 13px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 704px){
    display: block;
  }
`;

const Navbar2 = () => {
  const [active, setActive] = useState(false);
  const link = [
    {
      page: "Home",
      href: "/home",
    },
    { page: "About", href: "/about" },
    { page: "Blog", href: "/blog" },
    {
      page: "Services",
      href: "/services",
    },
    { page: "Log in", href: "/login" },
  ];
  return (
    <NavbarWrapper>
      <LogoImg src="" alt="LOGO" />
      <StyledFontAwesomeIcon  onClick={() => setActive(!active)}>
      {active?<FaTimes/>:<FaBars/>}
        </StyledFontAwesomeIcon>
      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink
            activeclassname="active"
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar2;