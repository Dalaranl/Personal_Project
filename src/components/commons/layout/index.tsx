import styled from "@emotion/styled";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation/navigation.container";
import { ReactChild } from "react";

interface IProps {
  children: ReactChild;
}
const Wrapper = styled.div`
  min-width: 850px;
  width: 100vw;
  height: 100vh;
`;

const LayoutBodyWrapper = styled.div`
  width: 100vw;
  height: 94vh;

  display: flex;
`;
const LayoutBodyDetail = styled.div`
  width: 85vw;
  height: 94vh;

  overflow-x: hidden;
`;

export default function Layout(props: IProps) {
  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutBodyWrapper>
        <LayoutNavigation />
        <LayoutBodyDetail>{props.children}</LayoutBodyDetail>
      </LayoutBodyWrapper>
    </Wrapper>
  );
}
