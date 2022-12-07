import styled from "styled-components";
import media from "./../../../styles/Responsive";

const StyledClients = styled.section`
  padding: 100px 0;
  ${media.up("sm")} {
    padding: 170px 0;
  }
  .row {
    ${media.customUp(992)} {
      display: flex;
      gap: 80px;
    }
    ${media.up("xl")} {
      gap: 130px;
    }

    .client__section__left {
      ${media.customUp(992)} {
        max-width: 470px;
      }

      &__title {
        margin-bottom: 12px;
        ${media.customUp(992)} {
          margin-bottom: 20px;
        }
      }
      &__description {
        margin-bottom: 28px;
      }
    }
    .client__section__right {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      ${media.customUp(992)} {
        gap: 30px;
      }
    }
  }
`;

export default StyledClients;
