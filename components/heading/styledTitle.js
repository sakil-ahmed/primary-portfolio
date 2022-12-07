import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyledTitle = styled.div`
  h1,
  .h1 {
    font: normal ${THEME.fontWeight.weightBold} 60px ${THEME.fonts.noto};
    line-height: 66px;
    color: ${THEME.colors.secondary};

    ${media.down("lg")} {
      font-size: 46px;
      line-height: 52px;
    }

    ${media.down("sm")} {
      font-size: 36px;
      line-height: 42px;
    }
  }

  h2,
  .h2 {
    font: normal ${THEME.fontWeight.weightBold} 42px ${THEME.fonts.noto};
    line-height: 46px;
    color: ${THEME.colors.secondary};

    ${media.down("lg")} {
      font-size: 36px;
      line-height: 40px;
    }

    ${media.down("sm")} {
      font-size: 26px;
      line-height: 30px;
    }
  }

  h3,
  .h3 {
    font: normal ${THEME.fontWeight.weightBold} 32px ${THEME.fonts.noto};
    line-height: 36px;
    color: ${THEME.colors.secondary};

    ${media.down("sm")} {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

export default StyledTitle;
