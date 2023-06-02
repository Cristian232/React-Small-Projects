import {
    GiAbdominalArmor,
    GiBatteredAxe,
    GiBellShield,
    GiBestialFangs, GiBloodySword, GiDeathStar, GiGoat
} from "react-icons/gi";

const SmallProjects = () => {
    return (
        <div className={"smallProjects bg-green-800 w-20 ml-[0.5vw] my-5 h-[80vh] flex items-center justify-items-center"}>
            <div className={"smallProjects-wrapper bg-blue-800 w-[80%] mx-[auto]"}>
                <ul className={"smallProjects-list bg-indigo-800 flex-col space-y-7  "}>
                    <li className={"smallProjects-item block bg-purple-300 block p-[5px] py-[10px] flex items-center rounded-[25px]"}> <GiBestialFangs size={40} className={"bg-red-500 mx-[auto]"}/></li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}> <GiAbdominalArmor size={40} className={"bg-red-500 mx-[auto]"}/> </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}> <GiBatteredAxe size={40} className={"bg-red-500 mx-[auto]"}/> </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}> <GiBellShield size={40} className={"bg-red-500 mx-[auto]"}/> </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}> <GiBloodySword size={40} className={"bg-red-500 mx-[auto]"}/> </li>
                    <li className={"smallProjects-item bg-purple-300 block p-[5px] py-[10px] flex items-center rounded-[25px]"}> <GiDeathStar size={40} className={"bg-red-500 mx-[auto]"}/> </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}> <GiGoat size={40} className={"bg-red-500 mx-[auto]"}/> </li>
                </ul>
            </div>
        </div>
    );
};

export default SmallProjects;