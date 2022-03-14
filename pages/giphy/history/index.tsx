import * as S from "../../../src/components/units/giphy/Giphy.emotion";
import GiphyModal from "../../../src/components/commons/libraries/modal/GiphyModal";
import { MouseEvent, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../_app";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function GiphyHistoryPage() {
  const [isClick, setIsClick] = useState(false);
  const [clickId, setClickId] = useState("");
  let ip = "";
  const [docs, setDocs] = useState<DocumentData[]>([]);

  const handleClose = () => {
    setIsClick((prev) => false);
  };

  const onClickImg = (e: MouseEvent<HTMLImageElement>) => {
    setClickId(e.currentTarget.id);
    setIsClick((prev) => true);
  };

  useEffect(() => {
    const getIp = async () => {
      const result = await axios.get("https://geolocation-db.com/json/");

      ip = result.data.IPv4;
    };
    getIp();
    setTimeout(() => fetchImg(ip), 1500);

    return console.log("unmount");
  }, []);

  const fetchImg = async (ip: string) => {
    const history = collection(getFirestore(firebaseApp), `history/ip/${ip}`);
    const result = await getDocs(history);
    setDocs(result.docs.map((el) => el.data()));
  };

  return (
    <S.Wrapper>
      <GiphyModal
        handleClose={handleClose}
        isClick={isClick}
        clickId={clickId}
      />
      <S.Header>
        <S.Logo>
          <img src="/img/GIPHYLogo.png" />
        </S.Logo>
        <S.History>
          <span>History</span>
        </S.History>
      </S.Header>
      <div id="result">
        {docs &&
          docs.map((el) => (
            <div key={uuidv4()} style={{ width: "27vw", height: "33vh" }}>
              <S.RsultImg
                src={el.urlHistory}
                id={el.urlHistory}
                style={{ width: "100%", height: "100%" }}
                onClick={onClickImg}
              />
            </div>
          ))}
      </div>
    </S.Wrapper>
  );
}
