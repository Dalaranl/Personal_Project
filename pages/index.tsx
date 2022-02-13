import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import Dots from "./Dots";
import FistPage from "../src/components/units/homePage/fist";
import SecondPage from "../src/components/units/homePage/second";
import ThirdPage from "../src/components/units/homePage/third";
import FourthPage from "../src/components/units/homePage/fourth";

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .divider {
    width: 100%;
    height: 5px;
    background-color: #a20568;
  }
`;
const DIVIDER_HEIGHT = 5;

export default function App() {
  const outerDivRef = useRef<any>(null);
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e: { preventDefault?: any; deltaY?: any }) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 1 + DIVIDER_HEIGHT * 1,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <Wrapper ref={outerDivRef}>
      <Dots scrollIndex={scrollIndex} />
      <div className="inner" id="bg-yellow">
        <FistPage />
      </div>
      <div className="divider"></div>
      <div className="inner" id="bg-blue">
        <SecondPage />
      </div>
      <div className="divider"></div>
      <div className="inner" id="bg-pink">
        <ThirdPage />
      </div>
      <div className="inner" id="bg-gray">
        <FourthPage />
      </div>
    </Wrapper>
  );
}
