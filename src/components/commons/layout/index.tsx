import styled from "@emotion/styled";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation/navigation.container";
import { ReactChild } from "react";
import { useRouter } from "next/router";

const HIDDEN_ALL = ["/"];

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
const IsHiddenWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-y: hidden;
`;
const LayoutBodyDetail = styled.div`
  width: 85vw;
  height: 94vh;

  overflow-x: hidden;
`;

export default function Layout(props: IProps) {
  const router = useRouter();

  const isHiddenAll = HIDDEN_ALL.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenAll ? (
        <div>
          <LayoutHeader />
          <LayoutBodyWrapper>
            <LayoutNavigation />
            <LayoutBodyDetail>{props.children}</LayoutBodyDetail>
          </LayoutBodyWrapper>
        </div>
      ) : (
        <div>
          <IsHiddenWrapper>{props.children}</IsHiddenWrapper>
        </div>
      )}
    </Wrapper>
  );
}
