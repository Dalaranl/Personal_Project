import styled from "@emotion/styled";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation/navigation.container";
import { ReactChild } from "react";

interface IProps {
  children: ReactChild;
}

const LayoutBodyWrapper = styled.div`
  width: 100vw;
  min-height: 94vh;
  display: flex;
`;
const LayoutBodyDetail = styled.div`
  width: 84vw;
  min-height: 94vh;
`;
const Wrapper = styled.div`
  min-width: 850px;
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
