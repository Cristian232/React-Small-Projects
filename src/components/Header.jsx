import {useEffect, useState} from "react";
import {DiReact} from "react-icons/di";
import {SiTailwindcss} from "react-icons/si";

const Header = () => {
    const [state, setState] = useState([]);


    return (
        <div className={"header text-stone-50 h-[8vh] flex align-middle row-span-1" }>
            <div className={"header-wrapper flex flex-row py-[10px] my-[auto] w-[100vw] "}>
                <div className={"header-left-logo-wrapper basis-1/3 pl-[0.5vw]"}>
                    <div className={"left-logo-content flex justify-center"}>
                        <DiReact size={36} className={"mt-0 logo"}/> <SiTailwindcss size={36} className={"mt-0 logo"}/>
                    </div>
                </div>
                <div className={"header-right-menu-wrapper basis-2/3"}>
                    <ul className={"header-right-menu flex flex-row-reverse pr-[0.5vw] space-x-[5px]"}>
                        <li className={"home order-3 px-[5vw] py-[5px] rounded-full shadow-[0_5px_5px_2px_rgba(0,0,0,0.3)] "}><p className={"drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] "}>Home</p></li>
                        <li className={"about order-2 px-[5vw] py-[5px] rounded-full shadow-[0_5px_5px_2px_rgba(0,0,0,0.3)]"}>
                            <p className={"drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]"}>About</p></li>
                        <li className={"contact order-1 px-[5vw] py-[5px] rounded-full shadow-[0_5px_5px_2px_rgba(0,0,0,0.3)]"}><p className={"drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]"}>Contact</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;