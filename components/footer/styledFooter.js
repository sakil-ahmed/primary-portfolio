import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyledFooter = styled.section`
  background-color: ${THEME.colors.orange};
  padding-top: 100px;

  .footer__content {
    padding-bottom: 38px;

    ${media.customUp(992)} {
      display: flex;
      column-gap: 131px;
    }

    ${media.down("lg")} {
      column-gap: 80px;
    }

    &__title {
      max-width: 470px;
      ${media.down("sm")} {
        margin-bottom: 12px;
      }
    }

    &__description {
      max-width: 470px;

      .description__text {
        margin-bottom: 40px;
        color: ${THEME.colors.secondary};
        ${media.down("sm")} {
          margin-bottom: 28px;
        }
      }
    }
  }
  .sub__title {
    padding-bottom: 38px;
    ${media.down("sm")} {
      padding-bottom: 18px;
    }
  }
  .footer__cta {
    margin-bottom: 38px;
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    ${media.down("sm")} {
      gap: 18px;
      margin-bottom: 55px;
    }
    ${media.customDown(480)} {
      flex-direction: column;
    }
  }
  .copy__right__text {
    padding: 38px 0;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    border-top: 1px solid ${THEME.colors.secondary};
    color: ${THEME.colors.bluishCyan};
  }
`;
export default StyledFooter;
