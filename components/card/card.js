import React from "react";
import StyleCard from "./styleCard";
import Image from "next/image";
import Title from "./../heading/heading";
import Description from "./../description/description";
import Link from "next/link";

const Card = ({ title, subTitle, img, className, path = "#" }) => {
  return (
    <StyleCard className={className}>
      <Link className="link" href={path} target="_blank"></Link>
      <Title tagName="h3" className="h3 card__title">
        {title}
      </Title>
      <Description className="card__description">{subTitle}</Description>
      <div className="card__thumbnail">
        <Image src={img} alt={title} height="auto" width="auto" />
      </div>
    </StyleCard>
  );
};

export default Card;
