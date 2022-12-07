import React from "react";
import StyledHeader from "./styleHeader";
import Container from "./../container/container";
import Link from "next/link";
import RightArrow from "./../icons/rightArrow";
import DesktopMenu from "./../icons/desktopMenu";
import MobileMenu from "./../icons/mobileMenu";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="row">
          <div className="header__logo">
            <Link href="/">Sakil A.</Link>
          </div>
          <div className="header__content">
            <ul className="menu">
              <li className="menu__item">
                <Link className="menu__item__link" href="/">
                  <RightArrow />
                  <span className="menu__item__text">START A PROJECT</span>
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__item__link" href="/">
                  <DesktopMenu />
                  <span className="menu__item__text">MENU</span>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/">
                  <MobileMenu />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
