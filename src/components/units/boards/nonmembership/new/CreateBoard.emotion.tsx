import styled from "@emotion/styled";

export const Wrapper = styled.div`
    min-width: 1000px;
    display: flex;

    div {
        min-height: 94vh;
        min-width: 1px;
    }
`

export const LeftSide = styled.div`
    width: 100vw;
    min-width: 510px;
    height: 94vh;
    
    background-image: linear-gradient(to bottom, #a20568, #77296c, #4f3161, #34304a, #28292d);
`


// 상세 페이지 
export const RightSide = styled.div`
    width: 100vw;
    min-width: 510px;
    height: 94vh;

    background-color: #1f2024;
`