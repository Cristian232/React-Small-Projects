import StyledContent from "../../styledComp/StyledContent";
import {useEffect, useState} from "react";
import StyledP from "../../styledComp/StyledP";

const Content = () => {

    const [dimension, setDimension] = useState("");
    const [imgSrc, setImgSrc] = useState("")

    useEffect(() => {
        setDimension(`${window.innerWidth - 200}x${window.innerHeight - 300}`)
    }, [])

    useEffect(() => {
        setImgSrc(`https://source.unsplash.com/random/${dimension}/?cat`)
    }, [])

    return (<StyledContent className={"content"}>
        <div className={"content-main-container"}>
            <h3 className={"subHeading"}>Her name is Coffee &#128515;, <br/> because
                who doesn't like Coffee? </h3>
            <StyledP className={"pContent"}>
                    {dimension.length && <img
                        src={imgSrc}
                        style={{maxWidth: '70vw', maxHeight: '50vh'}}/>}
            </StyledP>
        </div>
    </StyledContent>);
};

export default Content;