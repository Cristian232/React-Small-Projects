import {useEffect, useState} from "react";

const Header = () => {
    const [state, setState] = useState([]);


    return (
        <div className={"header bg-gradient-to-r from-cyan-600 to-indigo-700 text-stone-50"}>
            <div className={"header-wrapper flex flex-row py-[10px]"}>
                <div className={"header-left-logo-wrapper basis-1/3 pl-[0.5vw]"}>
                    <div className={"left-logo-content bg-green-300 flex justify-center py-[5px]"}>
                        <p className={"logo"}>X Logo X</p>
                    </div>
                </div>
                <div className={"header-right-menu-wrapper basis-2/3 bg-grey-500"}>
                    <ul className={"header-right-menu flex flex-row-reverse pr-[0.5vw] space-x-[5px]"}>
                        <li className={"home order-3 px-[5vw] py-[5px] bg-red-500 rounded-full shadow-[0_5px_5px_2px_rgba(0,0,0,0.3)] text-stone-50  drop-shadow"}><p className={"drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]"}>Home</p></li>
                        <li className={"about order-2 px-[5vw] py-[5px] bg-yellow-300 rounded-full shadow-[0_5px_5px_2px_rgba(0,0,0,0.3)] "}>
                            <p className={"drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]"}>About</p></li>
                        <li className={"contact order-1 px-[5vw] py-[5px] bg-blue-500 rounded-full shadow-[0_5px_5px_2px_rgba(0,0,0,0.3)]"}><p className={"drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]"}>Contact</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;