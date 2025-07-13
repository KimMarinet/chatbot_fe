import React from "react"
import Intro from "../components/Intro";
import styled from "styled-components";

const Wrapper = styled.div`
    flex-direction: column;
    height: 100%;
`;

const IntroContainer = () => {
    return(
        <Wrapper>
            <Intro />
        </Wrapper>
    );
};

export default React.memo(IntroContainer);