import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyledHeader = styled.header`
  background-color: ${THEME.colors.primary};
  padding-top: 43px;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header__logo {
      a {
        font: normal ${THEME.fontWeight.weightBold} 25px ${THEME.fonts.noto};
        color: ${THEME.colors.secondary};
      }
    }
    .header__content {
      .menu {
        display: flex;
        &__item {
          &:first-child {
            margin-right: 42px;
          }
          ${media.down("sm")} {
            &:not(:last-child) {
              display: none;
            }
          }
          ${media.up("sm")} {
            &:last-child {
              display: none;
            }
          }
          &__link {
            display: flex;
            align-items: center;
            gap: 8px;
            font: normal ${THEME.fontWeight.weightNormal} 18px
              ${THEME.fonts.manrope};
            line-height: 30px;
            color: ${THEME.colors.secondary};
          }
        }
      }
    }
  }
`;

export default StyledHeader;
