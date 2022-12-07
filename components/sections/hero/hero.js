import React from "react";
import StyleHero from "./styleHero";
import Container from "./../../container/container";
import Title from "./../../heading/heading";
import Description from "./../../description/description";
import Button from "./../../button/button";
import Image from "next/image";
import image from "./../../../images/heroImg.png";
import videoIcon from "./../../../images/Video.svg";
import Link from "next/link";
import DownArrow from "./../../icons/downArrow";
import BGImg from "./../../../images/BG.png";
const Hero = () => {
  return (
    <StyleHero>
      <Container>
        <div className="row">
          <div className="hero__left">
            <Title className="h1  hero__title" tagName="h1">
              I create digital product design experiences
            </Title>
            <Description className="hero__description">
              With best-in-class design and engineering, my work maximizes value
              by putting your customers at the center of everything I do.
            </Description>

            <Button varient="primary" text="Let’s Talk" />
            <div className="hero__left__link">
              <Link href="#footer" className="hero__link">
                <DownArrow />
              </Link>
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__right__img">
              <Image
                src={image}
                alt="Sakil Ahmed"
                className="hero__image"
                height="auto"
                width="auto"
              />
              <Image
                src={videoIcon}
                alt="Video Icon"
                className="hero__image__icon"
                height="auto"
                width="auto"
              />
            </div>
          </div>
        </div>
      </Container>
      <Image
        src={BGImg}
        alt="Background Svg Icon"
        className="bg__img"
        height="auto"
        width="auto"
      />
    </StyleHero>
  );
};

export default Hero;
