import styled from "@emotion/styled";

export const Wrapper = styled.div`
    min-width: 1000px;
    display: flex;

    div {
        min-height: 94vh;
        min-width: 1px;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

// export const LeftSide = styled.div`
//     width: 100vw;
//     min-width: 510px;
//     min-height: 94vh;

//     float: left;
    
//     background-image: linear-gradient(to bottom, #fe1881, #d03b97, #9e4c9b, #705290, #4f5077, #444a65, #3d4353, #383b41, #32353a, #2c2e33, #26282c, #202225);
// `


// // 상세 페이지 
// export const RightSide = styled.div`
//     width: 100vw;
//     min-width: 510px;
//     min-height: 94vh;

//     float: left;

//     display: flex;
//     flex-direction: column;
// `
// export const RightSideTop = styled.div`
//     min-height: 60%;
//     width: 100%;
//     background-color: #2e2f34;
// `
// export const RightSideBottom = styled.div`
//     min-height: 40%;
//     width: 100%;
//     background-color: #28292d;
// `