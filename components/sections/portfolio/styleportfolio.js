import styled from "styled-components";
import THEME from "./../../../styles/Theme";
import media from "./../../../styles/Responsive";

const StylePortfolio = styled.section`
  padding-top: 170px;
  ${media.down("md")} {
    padding-top: 100px;
  }

  .card1 {
    background-color: ${THEME.colors.primary};
  }
  .card2 {
    background-color: ${THEME.colors.orangeYellow};
    margin-bottom: 30px;
  }
  .card3 {
    background-color: ${THEME.colors.orange};
    margin-bottom: 54px;
  }
  .row {
    display: flex;
    gap: 30px;
    ${media.down("md")} {
      flex-wrap: wrap;
    }
    .portfolio__left {
      &__title {
        max-width: 470px;
        margin-bottom: 20px;
        ${media.down("sm")} {
          margin-bottom: 12px;
        }
      }
      &__description {
        max-width: 470px;
        margin-bottom: 70px;
        ${media.down("sm")} {
          margin-bottom: 28px;
        }
      }
    }
  }
`;

export default StylePortfolio;
