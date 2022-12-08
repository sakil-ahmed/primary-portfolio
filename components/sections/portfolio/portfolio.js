import React from "react";
import StylePortfolio from "./styleportfolio";
import Container from "./../../container/container";
import Button from "./../../button/button";
import Title from "./../../heading/heading";
import Description from "./../../description/description";
import Card from "../../card/card";
import img1 from "./../../../images/portfolioImages1.png";
import img2 from "./../../../images/portfolioImages2.png";
import img3 from "./../../../images/portfolioImages3.png";

const Portfolio = () => {
  return (
    <StylePortfolio>
      <Container>
        <div className="row">
          <div className="portfolio__left">
            <Title className="h2 portfolio__left__title" tagName="h2">
              My latest project that lives on the net.
            </Title>
            <Description className="portfolio__left__description">
              Let’s have look on my latest project that lives on the internet in
              recent times. I am providing the best design services for you.
            </Description>
            <Card
              className="card1"
              subTitle="Podcast, Mobile App"
              title="Podcast Mobile App Design"
              img={img1}
              path="https://minimog.netlify.app/"
            />
          </div>
          <div className="portfolio__right">
            <Card
              className="card2"
              subTitle="Podcast, Mobile App"
              title="Ad Tools Website Design"
              img={img2}
            />
            <Card
              className="card3"
              subTitle="Doctor, Web App"
              title="Doctor Web App Design"
              img={img3}
            />
            <Button path="/project" text="All Project" />
          </div>
        </div>
      </Container>
    </StylePortfolio>
  );
};

export default Portfolio;
