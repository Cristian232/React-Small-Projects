import StyledContent from "../../styledComp/StyledContent";
import {useEffect, useState} from "react";

const Content = () => {

    const [dimension, setDimension] = useState("");
    const [imgSrc, setImgSrc] = useState("")

    useEffect(() => {
        setDimension(`${window.innerWidth - 200}x${window.innerHeight - 300}`)
    }, [])

    useEffect(() => {
        setImgSrc(`https://source.unsplash.com/random/${dimension}/?coffee`)
    }, [])

    return (<StyledContent className={"content"}>
        <div className={"content-main-container"}>
            <h1 className={"subHeading"}>Random Coffee image, <br/> because
                who doesn't love coffee? </h1>
            <p className={"pContent"}>
                {dimension.length && <img
                    src={imgSrc}
                    style={{maxWidth: '70vw', maxHeight: '50vh'}}/>}
            </p>
        </div>
    </StyledContent>);
};

export default Content;