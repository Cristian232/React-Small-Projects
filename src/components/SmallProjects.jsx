import {
    GiAngelOutfit,
    GiBellShield,
    GiBloodySword, GiDeathStar, GiDonerKebab, GiGoat
} from "react-icons/gi";
import {SiStartrek} from "react-icons/si";
import {BsCloudLightningRainFill} from "react-icons/bs";

const SmallProjects = () => {
    return (
        <div
            className={"smallProjects smallProjectsCacheCssTest w-[75px] ml-[0.5vw] mx-[auto] h-[92vh] flex items-center justify-items-center row-span-1"}>
            <div className={"smallProjects-wrapper w-[80%] mx-[auto]"}>
                <ul className={"smallProjects-list flex-col space-y-5  "}>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <BsCloudLightningRainFill size={40}
                                                  className={"mx-[auto] sProjIcon"}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <GiAngelOutfit size={40}
                                       className={"mx-[auto] sProjIcon"}/></li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <SiStartrek size={40}
                                    className={"mx-[auto] sProjIcon"}/></li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <GiDonerKebab size={40}
                                      className={"mx-[auto] sProjIcon"}/></li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <GiBellShield size={40}
                                      className={"mx-[auto] sProjIcon"}/></li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <GiBloodySword size={40}
                                       className={"mx-[auto] sProjIcon"}/></li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <GiDeathStar size={40}
                                     className={"mx-[auto] sProjIcon"}/></li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <GiGoat size={40} className={"mx-[auto] sProjIcon"}/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SmallProjects;