import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  min-width: 849px;
  height: 6vh;

  background: rgb(31, 32, 36);
  background: linear-gradient(
    90deg,
    rgba(31, 32, 36, 1) 13%,
    rgba(51, 54, 61, 1) 28%
  );
`;

export default function LayoutHeader() {
  return <Wrapper></Wrapper>;
}
