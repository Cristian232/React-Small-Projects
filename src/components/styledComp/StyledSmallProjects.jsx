import styled from "styled-components";

const StyledSmallProjects = styled.div`

  .smallProjects-wrapper {
    height: 100%;
  }

  .smallProjects-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .smallProjects-item {
    display: contents;
    //padding: 10px;
    border: none;
    box-shadow: none;
  }

  .smallProjects-item a {
    display: contents;
    //padding: 10px;
    border: none;
    box-shadow: none;

  }

  .smallProjects-list li a svg {
    display: block;
    padding: 10px;
    border-radius: 20px;
    border: 1px outset rgba(8, 139, 213, 0.5);
    box-shadow: 2px 5px 15px rgb(30 29 29);
  }

  .smallProjects-list li a svg:hover {
    border: 1px outset rgba(8, 139, 213, 0.5);
    box-shadow: 1px 1px 2vh 0.5vh hsl(40deg 39% 88%);
  }
  
`;

export default StyledSmallProjects;