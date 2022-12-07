import React from "react";
import StyleAward from "./styleAward";
import Container from "./../../container/container";
import Title from "./../../heading/heading";
import Description from "./../../description/description";
import { AWARDS, CSSDA, FWA } from "./data";

const AwardSection = () => {
  return (
    <StyleAward>
      <Container>
        <div className="award__section__top">
          <Title className="h2 award__section__title" tagName="h2">
            My amazing design rewards list
          </Title>
          <Description className="award__section__desscription">
            Design services I am providing. With best-in-class design and
            engineering, my work maximizes value by putting your customers at
            the center of everything I do.
          </Description>
        </div>
        <div className="award__section__bottom">
          <div className="awards">
            <Title className="h3 awards__title" tagName="h3">
              AWWWARDS ({AWARDS.length})
            </Title>
            {AWARDS.map(({ text, id }) => {
              return (
                <Description key={id} className="awards__description">
                  {text}
                </Description>
              );
            })}
          </div>
          <div className="fwa">
            <Title className="h3 awards__title" tagName="h3">
              FWA ({FWA.length})
            </Title>
            {FWA.map(({ text, id }) => {
              return (
                <Description key={id} className="awards__description">
                  {text}
                </Description>
              );
            })}
          </div>
          <div className="cssda">
            <Title className="h3 awards__title" tagName="h3">
              CSSDA ({CSSDA.length})
            </Title>
            {CSSDA.map(({ text, id }) => {
              return (
                <Description key={id} className="awards__description">
                  {text}
                </Description>
              );
            })}
          </div>
        </div>
      </Container>
    </StyleAward>
  );
};

export default AwardSection;
