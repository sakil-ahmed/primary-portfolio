import styled from "styled-components";
import THEME from "./../../../styles/Theme";
import media from "./../../../styles/Responsive";

const StyleHero = styled.section`
  background-color: ${THEME.colors.primary};
  padding-top: 57px;
  padding-bottom: 80px;
  position: relative;
  ${media.down("md")} {
    padding-top: 37px;
  }

  .bg__img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .row {
    display: flex;
    gap: 129px;
    ${media.down("xl")} {
      gap: 40px;
    }
    ${media.down("lg")} {
      flex-wrap: wrap;
    }
    .hero__left {
      ${media.up("lg")} {
        max-width: 470px;
      }
      .hero__title {
        margin-bottom: 20px;
        ${media.down("lg")} {
          margin-bottom: 12px;
        }
      }
      .hero__description {
        margin-bottom: 40px;
        ${media.down("lg")} {
          margin-bottom: 28px;
        }
        color: ${THEME.colors.secondary};
      }

      .hero__left__link {
        margin-top: 70px;
        ${media.down("lg")} {
          margin-bottom: 70px;
        }
      }
      .hero__link {
        width: 54px;
        height: 54px;
        border: 1px solid ${THEME.colors.secondary};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        svg {
          display: inline-block;
        }
      }
    }
    .hero__right {
      &__img {
        position: relative;
      }
      .hero__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .hero__image__icon {
        display: none;
        ${media.up("lg")} {
          position: absolute;
        }
        ${media.down("md")} {
          margin-top: 40px;
        }
        top: 9%;
        right: -23%;
        ${media.down("xl")} {
          right: -7%;
        }
      }
    }
  }
`;

export default StyleHero;
