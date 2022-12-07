import styled from "styled-components";
import media from "./../../../styles/Responsive";

const StyleAward = styled.section`
  padding-top: 170px;

  ${media.down("sm")} {
    padding-top: 100px;
  }

  .award__section__top {
    display: flex;
    margin-bottom: 70px;
    justify-content: space-between;
    flex-wrap: wrap;

    ${media.down("lg")} {
      margin-bottom: 28px;
    }
    .award__section__title {
      ${media.up("lg")} {
        max-width: 470px;
      }

      ${media.down("lg")} {
        margin-bottom: 12px;
      }
    }

    .award__section__desscription {
      ${media.up("lg")} {
        max-width: 570px;
      }
    }
  }
  .award__section__bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .awards {
      ${media.down("sm")} {
        margin-bottom: 28px;
      }

      &__title {
        margin-bottom: 38px;

        ${media.down("sm")} {
          margin-bottom: 12px;
        }
      }

      &__description {
        margin-bottom: 18px;

        ${media.down("sm")} {
          margin-bottom: 12px;
        }
      }
    }
    .fwa {
      ${media.down("sm")} {
        margin-bottom: 28px;
      }
    }

    .cssda {
    }
  }
`;
export default StyleAward;
