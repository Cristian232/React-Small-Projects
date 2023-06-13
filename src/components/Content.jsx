import styled from "styled-components";
import devices from "../style/breakpoints";

const StyledContent = styled.div`
  
  min-height: 100%;
  display: flex;

  h1 {
    padding: clamp(25px, 10px + 6vh, 50px) 10px;
    color: white;
    text-shadow: 1px 1px 1px black;
    font-size: 24px;
    text-align: center;
  }

  h3 {
    padding: 8px 1px;
    color: white;
    text-shadow: 1px 1px 5px black;
    font-size: 18px;
    text-align: center;
  }

  p {
    padding: 3px 1px;
    color: white;
    text-shadow: 1px 1px 2px black;
    font-size: 16px;
    text-align: center;
  }

  .content-main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width: 100%
  }

  @media screen and ${devices.sm} and ${devices.hr} {

    #heading, #subHeading {
      text-align: start;
      padding-left: 5vw;
    }

    .pContent {
      padding: 0 10vw;
    }

  }

`;

const Content = () => {
    return (
        <StyledContent className={"content"}>
            <div className={"content-main-container"}>
                <h1 id={"heading"}>Header Lorem ipsum dolor sit amet.</h1>
                <h3 id={"subHeading"}>Header description Lorem ipsum dolor sit
                    amet.<br/> Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Libero, omnis.</h3>
                <p className={"pContent"}>Content Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Recusandae, ullam? Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. A ab alias
                    aperiam assumenda at atque beatae commodi cumque dolore,
                    dolorem doloribus dolorum earum eius error expedita facere
                    fugiat inventore ipsam iste labore laudantium mollitia
                    nesciunt nisi, nostrum obcaecati officia officiis possimus
                    qui saepe similique sunt vitae voluptate voluptatem.
                    Dolorem, fugit?</p>
                <p className={"pContent"}>Content</p>
                <p className={"pContent"}>Content</p>
                <p className={"pContent"}>Content</p>
            </div>
        </StyledContent>
    );
};

export default Content;