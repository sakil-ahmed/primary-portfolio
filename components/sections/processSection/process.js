import React from "react";
import StyleProcess from "./styleProcess";
import Container from "./../../container/container";
import Title from "./../../heading/heading";
import Description from "./../../description/description";

const Process = () => {
  return (
    <StyleProcess>
      <Container>
        <div className="row">
          <div className="process__left">
            <Title tagName="h2" className="h2 process__title">
              How I deliver digital products.
            </Title>
            <Description className="process__description">
              Through each phase of my engagement, I utilize focused teams that
              combine experience design, modern engineering, and iterative
              program.
            </Description>
          </div>
          <div className="process__right">
            <div className="create process__right__col">
              <span className="process__badge">01</span>
              <Title tagName="h3" className="h3 process__right__title">
                Create
              </Title>
              <Description className="process__right__description">
                Discovery, strategy, and experience design that enables stronger
                customer connections.
              </Description>
            </div>
            <div className="build process__right__col">
              <span className="process__badge">02</span>
              <Title tagName="h3" className="h3 process__right__title">
                Build
              </Title>
              <Description className="process__right__description">
                Develop modern technology and launch experiences that converge
                with enterprise standards.
              </Description>
            </div>
            <div className="evolve process__right__col">
              <span className="process__badge">03</span>
              <Title tagName="h3" className="h3 process__right__title">
                Evolve
              </Title>
              <Description className="process__right__description">
                Embedded, expert teams working alongside you to continue to
                iterate and maximize customer value.
              </Description>
            </div>
          </div>
        </div>
      </Container>
    </StyleProcess>
  );
};

export default Process;
