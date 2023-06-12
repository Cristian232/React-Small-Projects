import {useEffect, useState} from "react";
import {Styledcomponents} from "@styled-icons/simple-icons/Styledcomponents";
import {ReactLogo as Reactlogo} from "@styled-icons/simple-icons/ReactLogo";
import {Menu as Hamburgermenu} from "@styled-icons/entypo/Menu";
import styled from "styled-components";
import devices from "../style/breakpoints";

const StyledComp = styled(Styledcomponents)`
  color: white;
`;

const ReactLogo = styled(Reactlogo)`
  color: white;
`;

const HamburgerMenu = styled(Hamburgermenu)`
  color: white;
  height: 30px;

`;

const StyledHeader = styled.div`

  align-items: center;
  display: grid;

  .header-wrapper {
    .header-left-logo-wrapper {
      display: none;
    }
  }

  .header-right-menu {
    display: flex;
    color: white;
    align-items: center;
  }

  .about, .home, .contact {
    flex-grow: 1;
    border-radius: 3px;
    border-bottom: 2px groove rgba(8, 139, 213, 0.1);
    text-shadow: 1px 1px #6e6d6d;
    padding: 16px 10px;
  }

  .left-menu {
    padding: 9px 10px;
    flex-grow: 1;
    border-radius: 3px;
    border-bottom: 2px groove rgba(8, 139, 213, 0.1);
    text-shadow: 1px 1px #6e6d6d;
  }

  .header-right-menu li p {
    text-align: center;
    font-family: 'Space Grotesk', "Comic Sans MS", "Helvetica Neue", cursive;
  }

  .header-right-menu li:hover {
    color: #f9f9f9;
    text-shadow: 1px 1px 5px #8d8d8d;
    background: rgb(206, 184, 158);
    background: linear-gradient(0deg, rgba(206, 184, 158, 0.8960376386882878) 3%, rgba(206, 184, 158, 0.6) 7%, rgba(206, 184, 158, 0) 12%);
  }

  .dropDown {
    color: greenyellow;
    z-index: 1;
  }

  .dropDown li {
    padding: 5px 1px;
    text-align: center;
    background-color: rgb(50 54 60);
    border-bottom: 2px groove rgba(8, 139, 213, 0.1);
    font-family: 'Roboto', cursive;
    font-size: 10px;
  }

  .dropDown li:hover {
    color: cornflowerblue;
  }

  .dropDown-content {
    display: none;
  }

  @media screen and ${devices.xs} {
    .dropDown {
      width: 60vw;
    }
    .dropDown li {
      padding: 3vh 6vw;
    }
    

  }

  @media screen and  ${devices.sm} and ${devices.hr} {

  }
  

`;


const Header = () => {
    const [state, setState] = useState([]);
    const [selected, setSelected] = useState(false);

    function dropDownHandler() {
        setSelected(!selected);
        console.log("clicked")
    }


    return (
        <StyledHeader
            className={"header"}>
            <div
                className={"header-wrapper"}>
                <div
                    className={"header-left-logo-wrapper"}>
                    <div
                        className={"left-logo-content"}>
                        <ReactLogo size={36} className={"logo"}/> <StyledComp
                        size={36} className={"logo"}/>
                    </div>
                </div>
                <div className={"header-right-menu-wrapper"}>
                    <ul className={"header-right-menu"}>
                        <li className={"left-menu"}
                            id={"left-menu"}><p onClick={dropDownHandler}>
                            <HamburgerMenu className={"hamburger"}/>
                        </p></li>
                        <li className={"home"}>
                            <p>Home</p>
                        </li>
                        <li className={"about"}>
                            <p>About</p>
                        </li>
                        <li className={"contact"}>
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className={`dropDown ${selected ? "dropDown-content" : ""}`}>
                <li>home</li>
                <li>home2</li>
                <li>home3</li>
            </ul>
        </StyledHeader>

    );
};

export default Header;