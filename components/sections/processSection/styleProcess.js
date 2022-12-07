import styled from "styled-components";
import THEME from "./../../../styles/Theme";
import media from "./../../../styles/Responsive";

const StyleProcess = styled.section`
  padding-top: 170px;
  ${media.down("lg")} {
    padding-top: 100px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .process__left {
      ${media.up("lg")} {
        max-width: 470px;
      }
      ${media.down("lg")} {
        margin-bottom: 28px;
      }

      .process__title {
        margin-bottom: 20px;
      }
      .process__description {
      }
    }
    .process__right {
      display: flex;
      gap: 30px;
      ${media.down("md")} {
        flex-wrap: wrap;
      }
    }
    .process__right__col {
      ${media.up("lg")} {
        width: 170px;
      }
    }
    .create {
      .process__badge {
        background-color: ${THEME.colors.primary};
      }
    }
    .build {
      .process__badge {
        background-color: ${THEME.colors.orangeYellow};
      }
    }
    .evolve {
      .process__badge {
        background-color: ${THEME.colors.orange};
      }
    }
    .process__right__title {
      margin-bottom: 28px;
      ${media.down("sm")} {
        margin-bottom: 4px;
      }
    }
    .process__right__description {
      font-size: 16px;
      line-height: 28px;
    }
  }
  .process__badge {
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font: normal ${THEME.fontWeight.weightNormal} 18px ${THEME.fonts.manrope};
    line-height: 30px;
    color: ${THEME.colors.secondary};
    margin-bottom: 18px;
    ${media.down("sm")} {
      margin-bottom: 12px;
    }
  }
`;

export default StyleProcess;
