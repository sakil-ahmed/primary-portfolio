import React from "react";
import StyledClients from "./styleClient";
import Container from "./../../container/container";
import Title from "./../../heading/heading";
import Description from "./../../description/description";
import CLIANT_DATA from "./cliantData";
import Image from "next/image";

const Clients = () => {
  return (
    <StyledClients>
      <Container>
        <div className="row">
          <div className="client__section__left">
            <Title className="h2 client__section__left__title" tagName="h2">
              My honorable clients across the globe
            </Title>
            <Description className="client__section__left__description">
              Through each phase of my engagement, I utilize focused teams that
              combine experience design, modern engineering, and iterative
              program.
            </Description>
          </div>
          <div className="client__section__right">
            {CLIANT_DATA.map(({ img, name }, i) => {
              return (
                <Image
                  key={i}
                  src={img}
                  alt={name}
                  className="client__section__right__img"
                  height="auto"
                  width="auto"
                />
              );
            })}
          </div>
        </div>
      </Container>
    </StyledClients>
  );
};

export default Clients;
