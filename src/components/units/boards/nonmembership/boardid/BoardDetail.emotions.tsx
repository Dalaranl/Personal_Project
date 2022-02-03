import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1600px;

  overflow-y: hidden;
  display: flex;
`;

export const LeftSide = styled.div`
  width: 35vw;
  height: 100%;

  background-image: linear-gradient(
    to bottom,
    #a20568,
    #77296c,
    #4f3161,
    #34304a,
    #28292d
  );
`;
export const RightSide = styled.div`
  width: 50vw;
  height: 100%;
  padding: 20px;
  background-color: #303136;
`;
