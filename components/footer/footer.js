import React from "react";
import Container from "../container/container";
import Description from "../description/description";
import Title from "../heading/heading";
import StyledFooter from "./styledFooter";
import Button from "./../button/button";

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <Container>
        <div className="footer__content">
          <Title tagName="h2" className="h2 footer__content__title">
            Interested to working with me?
          </Title>
          <div className="footer__content__description">
            <Description className="description__text">
              Interested to working with me? Through each phase of my
              engagement, I utilize focused teams that combine experience
              design, modern engineering, and iterative program.
            </Description>
            <Button text="Let’s Talk" />
          </div>
        </div>
        <Title tagName="h3" className="h3 sub__title">
          Say hi!
        </Title>
        <div className="footer__cta">
          <Button
            varient="outline"
            text="Email Me"
            path="mailto:sakilahmed.dev@gmail.com"
          />
          <Button
            varient="outline"
            text="Facebook"
            path="https://www.facebook.com/sakilahmed009"
          />
          <Button
            varient="outline"
            text="Linkedin"
            path="https://www.linkedin.com/in/sakil-ahmed007/"
          />
        </div>
        <Description className="copy__right__text">
          Copyright © 2022 UIHUT all rights reserved.
        </Description>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
