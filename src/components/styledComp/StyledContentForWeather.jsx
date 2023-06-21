import styled from "styled-components";
import StyledContent from "./StyledContent";

const StyledContentForWeather = styled(StyledContent)`
  h3 {
    margin-bottom: 10vh;
  }

  p {
    margin-bottom: 3vh;
  }

  .content-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100%
  }
`;

export default StyledContentForWeather;