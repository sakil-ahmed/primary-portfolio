import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyleCard = styled.div`
  position: relative;
  padding: 38px;
  border-radius: 24px;
  max-width: 570px;
  ${media.down("sm")} {
    padding: 20px;
  }

  .link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .card__title {
    margin-bottom: 8px;
    ${media.down("sm")} {
      margin-bottom: 2px;
    }
  }
  .card__description {
    margin-bottom: 38px;
    ${media.down("sm")} {
      margin-bottom: 20px;
    }
  }
  .card__thumbnail {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
`;

export default StyleCard;
