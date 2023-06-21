import {
    GiAquarius,
    GiAries,
    GiCancer,
    GiCapricorn,
    GiGemini,
    GiLeo,
    GiLibra,
    GiPisces,
    GiSagittarius,
    GiScorpio,
    GiTaurus,
    GiVirgo
} from "react-icons/gi";
import {useState} from "react";
import StyledContentForHoroscope
    from "../../styledComp/StyledContentForHoroscope";


const Content = () => {

    const [signDesc, setSignDesc] = useState({"name": "" ,"desc":"Click on your sign"})

    // Hardcoded because there is no horoscope without api key
    const signWithDesc = {
        "aries": "A more confident approach with your superiors could do the trick. You are very good at what you do, and you should project that amount of confidence. At work, a new group of friends are enticing you to spend time with them, but don’t forget your comfort zone either.",
        "taurus": "The time has come when you need to live in the present. The universe beckons, and has a plan for you. You are undecided about the path to choose. But things have a way of falling into place, you just need to trust.",
        "gemini": "Friends are giving you a hard time right now, demanding more of your time and attention than possible. You are feeling subdued, but your flamboyant personality wins over a cold colleague or boss..",
        "cancer": "You are feeling stressed out and you know it. There are many choices to consider, and family and friends around you are vying for your time and attention. Avoid being indecisive and make a decision soon. If the decision is from the heart, it will be the right one.",
        "leo": "Elders in the family can be quite demanding, and you feel used. However, you need to learn to say ‘no’ as well. Turn things around, make sure that they do their share. A family outing can be very enlightening, and you can understand the family politics that is going on.",
        "virgo": "Be on your best behaviour. You can accomplish the most if you travel for business purposes. This is a great day for a family outing or just a drive. Be careful not to take too much for granted when dealing on either a personal or professional level.",
        "libra": "Disharmony at home stressful. Avoid making unrealistic promises. Romantic relationships should stabilize. Dramatic actions tonight can change your life. You may be given a position of leadership or responsibility today.",
        "scorpio": "Focus your efforts on your work. Insurance payouts, tax rebates, or just plain luck makes it a great day. Use your charm, but don't sign or agree to anything. Don't divulge secret information.",
        "capricorn": "A period of change and transition begins, with the moon bringing new endeavours to fruition. Singles may find an opportunity to cross the frontier of romance. Travel, study or people from overseas may be involved.",
        "sagittarius": "You are very clear and perceptive now. It's a good time to make a decision, come to an agreement, and negotiate a deal. A fresh view of an old financial problem can help you sort out your financial tangles.",
        "aquarius": "Stress-related problems through overwork are possible. New career responsibilities will be allotted. Creative or spiritual activities or development may feature. Matters from the past may come to light to be resolved or understood.",
        "pisces": "A trip abroad or even a foreign junket becomes possible. Passions escalate – so keep your cool and avoid angry outbursts. You may go back on a nostalgic trip or an old flame flickers back into your life."
    }

    function clickHandler(e) {
        setSignDesc({"name" : e.currentTarget.getAttribute("sign"), "desc" : signWithDesc[e.currentTarget.getAttribute("sign")]})
    }

    let size = 40

    return (<StyledContentForHoroscope className={"content"}>
        <div className={"content-main-container"}>
            <h1 className={"heading"}>Your Horoscope</h1>
            <h3 className={"subHeading"}>{signDesc.name}</h3>
            <p className={"pContent"}>{signDesc.desc}</p>

            <div className={"signArea"}>
                <div className={"signCard"} sign={"aquarius"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiAquarius size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Ian 20 - Feb 18 Aquarius </p>
                    </div>
                </div>

                <div className={"signCard"} sign={"pisces"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiPisces size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Feb 19 - Mar 20 Pisces</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"aries"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiAries size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Mar 21 - Apr 19 Aries</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"taurus"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiTaurus size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Apr 20 - May 20 Taurus</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"gemini"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiGemini size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>May 21 - Jun 20 Gemini</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"cancer"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiCancer size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>June 21 - Jul 22 Cancer</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"leo"} onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiLeo size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Jul 23 - Aug 22 Leo</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"virgo"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiVirgo size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Aug 23 - Sep 22 Virgo</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"libra"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiLibra size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Sep 23 - Oct 22 Libra</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"scorpio"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiScorpio size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Oct 23 - Nov 21 Scorpio</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"sagittarius"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiSagittarius size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Nov 22 - Dec 21 Sagittarius</p>
                    </div>
                </div>

                <div className={"signCard"} sign={"capricorn"}
                     onClick={clickHandler}>
                    <div className={"signImg"}>
                        <GiCapricorn size={size}/>
                    </div>
                    <div className={"signDate"}>
                        <p>Dec 22 - Ian 19 Capricorn</p>
                    </div>
                </div>
            </div>
        </div>
    </StyledContentForHoroscope>);
};

export default Content;