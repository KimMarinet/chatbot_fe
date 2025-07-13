import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import fontsize from "../../global/styles/fontsize"

import img1 from "../../global/images/AICharacters/Diesel.png"
import img2 from "../../global/images/AICharacters/Exia.png"
import img3 from "../../global/images/AICharacters/Liter.png"
import img4 from "../../global/images/AICharacters/Rapi_RedHood.png"
import img5 from "../../global/images/AICharacters/Scarlet_BlackShadow.png"

const { medium } = fontsize;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;

    img{
        max-width: 250px;
        border-width: 3px;
        border-style: solid;
        border-color: #4a78b8;
    }

    .rowScroll{
        display: flex;
        justify-content: center;
        gap: 4px;
        margin: 0px 10px;
    }

    .AIimg{
        font-size: ${medium};
    }
`;

const test = [
    {id: "디젤", src: img1},
    {id: "엑시아", src: img2},
    {id: "리타", src: img3},
    {id: "라피", src: img4},
    {id: "홍련", src: img5}
]

const Intro = () =>{

    const navigate = useNavigate();

    const moveToChatbot = () => {
        navigate("/chatbot")
    };

    return(
        <Wrapper>
                <h1>대화하고 싶은 AI를 선택하세요</h1>

                <div>
                    <ul className="rowScroll">
                        {test.map((item) =>(
                            <li className="AIimg" onClick={moveToChatbot}>
                                <img src={item.src}/>
                                <h3>{item.id}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </Wrapper>
    );
};

export default React.memo(Intro);