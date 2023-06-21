import {useContext, useState} from "react";
import AppContext from "./AppContext";
import {Link} from "react-router-dom";
import StyledHeader from "./styledComp/StyledHeader";
import ReactLogo from "./styledComp/ReactLogo";
import StyledComp from "./styledComp/StyledComp";
import HamburgerMenu from "./styledComp/HamburgerMenu";

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
                            <Link to={"/"}>
                            <p>Home</p>
                            </Link>
                        </li>
                        <li className={"about"}>
                            <Link to={"/about"}>
                            <p>About</p>
                            </Link>
                        </li>
                        <li className={"contact"}>
                            <Link to={"/contact"}>
                            <p>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className={`dropDown ${selected ? "dropDown-content" : ""}`}>
                { items.map(item =>
                <li key={item.name}><Link to={item.link}><p>{item.name}</p></Link></li>
            ) }
            </ul>
        </StyledHeader>
    );
};

export default Header;