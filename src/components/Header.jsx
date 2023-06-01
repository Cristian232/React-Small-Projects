import {useEffect, useState} from "react";

const Header = () => {
    const [state, setState] = useState([]);


    return (
        <div className={"header"}>
            <div className={"header-wrapper"}>
                <div className={"header-left-logo-wrapper"}>
                    <div className={"left-logo-content"}>
                        <p className={"logo"}>X Logo X</p>
                    </div>
                </div>
                <div className={"header-right-menu-wrapper"}>
                    <ul className={"header-right-menu"}>
                        <li className={"home"}>Home</li>
                        <li className={"about"}>About</li>
                        <li className={"contact"}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;