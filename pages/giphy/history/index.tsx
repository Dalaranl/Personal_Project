import * as S from "../../../src/components/units/giphy/Giphy.emotion";
import GiphyModal from "../../../src/components/commons/libraries/modal/GiphyModal";
import { MouseEvent, useEffect, useState } from "react";
import axios from "axios";
import { firebaseApp } from "../../_app";
import { v4 as uuidv4 } from "uuid";
import { doc, getDoc,getFirestore,
  DocumentData, } from "firebase/firestore";

export default function GiphyHistoryPage() {
  const [isClick, setIsClick] = useState(false);
  const [clickId, setClickId] = useState("");
  const [history, setHistory] = useState<DocumentData[]>([]);

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
      const ip = result.data.IPv4
      fetchImg(ip);
    };

    getIp();
  }, []);

  const fetchImg = async (ip: string) => {
    const firestore = getFirestore(firebaseApp);
    const DB = firestore;
    const docRef = doc(DB, "history", ip);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setHistory([...docSnap.data().history])
    }
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
        {history &&
          history.map((el) => (
            <div key={uuidv4()} style={{ width: "27vw", height: "33vh" }}>
              <S.RsultImg
                src={String(el)}
                id={String(el)}
                style={{ width: "100%", height: "100%" }}
                onClick={onClickImg}
              />
            </div>
          ))}
      </div>
    </S.Wrapper>
  );
}
