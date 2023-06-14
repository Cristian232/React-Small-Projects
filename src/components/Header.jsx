import {useContext, useState} from "react";
import {Styledcomponents} from "@styled-icons/simple-icons/Styledcomponents";
import {ReactLogo as Reactlogo} from "@styled-icons/simple-icons/ReactLogo";
import {Menu as Hamburgermenu} from "@styled-icons/entypo/Menu";
import styled from "styled-components";
import devices from "../style/breakpoints";
import AppContext from "./AppContext";

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
  align-self: center;

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
    display: none;
  }

  .dropDown li {
    padding: 10px 1px;
    text-align: center;
    background-color: rgb(50 54 60);
    border: 2px groove rgba(8, 139, 213, 0.37);
    font-family: 'Roboto', cursive;
    font-size: 10px;
    border-radius: 5px;
  }

  .dropDown-content {
    display: block;
    z-index: 1;
    position: absolute;
    width: 100%;
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
    .left-menu {
      display: none;
    }

    .dropDown {
      display: none;
    }

    .header-wrapper {
      display: flex;
      justify-content: space-between;

      .header-left-logo-wrapper {
        display: flex;
        align-items: center;
        padding: 5px 15vw;
      }

      .header-right-menu-wrapper {
        display: flex;
        justify-content: center;
        flex-grow: 0.5;
        padding: 0 25px;

        .header-right-menu {
          flex-grow: 1;
        }

        .header-right-menu li {
          padding: 10px 10px;
          text-shadow: 2px 1px 3px black;
          margin: 0 3px;
          border-radius: 20px;
          border: 1px outset rgba(8, 139, 213, 0.5);
          box-shadow: 2px 5px 15px rgb(30 29 29);
        }

        .header-right-menu li:hover {
          color: #f9f9f9;
          text-shadow: 1px 1px 1px #000000;
          background-image: linear-gradient(65deg,
          hsl(31deg 31% 61%) 0%,
          hsl(32deg 43% 78%) 60%,
          hsl(31deg 56% 84%) 81%,
          hsl(40deg 39% 88%) 92%,
          hsl(176deg 80% 92%) 100%);
        }
      }
    }
  }
`;


const Header = () => {

    const [selected, setSelected] = useState(false);
    const {items,setItems} = useContext(AppContext);

    function dropDownHandler() {
        setSelected(!selected);
    }

    return (<StyledHeader
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
                {items.map(i =>
                    <li key={i[0]}>{i[0]}</li>
                )}
            </ul>
        </StyledHeader>
    );
};

export default Header;