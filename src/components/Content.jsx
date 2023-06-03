const Content = () => {
    return (
        <div className={"content my-[4vh] mx-[2vw] flex flex-1 text-white"}>
            <div className={"content-main-container max-w-[90vw] "}>
                <h1 className={"p-[5vw] text-[30px]"} id={"heading"}>Header Lorem ipsum dolor sit amet.</h1>
                <h3 className={"p-[3vw] text-[15px]"} id={"subHeading"}>Header description Lorem ipsum dolor sit amet.<br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, omnis.</h3>
                <p className={"py-[2vh] pl-[2vw]"} id={"pContent"}>Content</p>
                <p className={"py-[2vh] pl-[2vw]"}>Content</p>
                <p className={"py-[2vh] pl-[2vw]"}>Content</p>
                <p className={"py-[2vh] pl-[2vw]"}>Content</p>
            </div>
        </div>
    );
};

export default Content;