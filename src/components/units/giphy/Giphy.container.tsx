import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import GiphyUI from "./Giphy.presenter";
import FirebaseAddDocGiphy from "../../../commons/libraries/firebaseAddDocGiphy";

const MY_KEY = process.env.NEXT_PUBLIC_GIPHY_KEY;

export default function Giphy() {
  const [returnData, setReturnData] = useState([]);
  const [isGif, setIsGif] = useState(true);
  const [rating, setRating] = useState("g");
  const [userInput, setUserInput] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [clickId, setClickId] = useState("");
  const [ip, setIp] = useState("");

  // Gif query
  const onClickTrending = async () => {
    const { data } = await axios.get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: MY_KEY,
        rating: rating,
      },
    });
    setReturnData(
      data.data.map((el: any) => {
        return el.images.original.url;
      })
    );
  };

  const onClickSearch = async () => {
    const { data } = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: MY_KEY,
        rating: rating,
        q: userInput,
        lang: "ko",
        limit: 50,
        offset: 0,
      },
    });
    setReturnData(
      data.data.map((el: any) => {
        return el.images.original.url;
      })
    );
  };

  // Clips Query
  const onClickClipsTrending = async () => {
    const { data } = await axios.get(
      "https://api.giphy.com/v1/clips/trending",
      {
        params: {
          api_key: MY_KEY,
          rating: rating,
        },
      }
    );
    setReturnData(
      data.data.map((el: any) => {
        return el.images.original.url;
      })
    );
  };

  const onClickClipsSearch = async () => {
    const { data } = await axios.get("https://api.giphy.com/v1/clips/search", {
      params: {
        api_key: MY_KEY,
        rating: rating,
        q: userInput,
        lang: "ko",
        limit: 50,
        offset: 0,
      },
    });
    setReturnData(
      data.data.map((el: any) => {
        return el.images.original.url;
      })
    );
  };

  // firebase query
  useEffect(() => {
    getIp();
  }, []);

  const getIp = async () => {
    const result = await axios.get("https://geolocation-db.com/json/");

    setIp(result.data.IPv4);
  };

  const onClickImg = (e: MouseEvent<HTMLImageElement>) => {
    setIsClick((prev) => true);
    setClickId(e.currentTarget.id);
    FirebaseAddDocGiphy(e.currentTarget.id, ip);
  };
  const handleClose = () => {
    setIsClick((prev) => false);
  };

  // 상태 관리
  const onChangeUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(encodeURIComponent(e.target.value));
  };
  const onSelectRating = (e: ChangeEvent<HTMLSelectElement>) => {
    setRating(e.target.value);
  };
  const onChangeIsGIF = () => {
    setIsGif((prev) => true);
  };
  const onChangeIsClips = () => {
    setIsGif((prev) => false);
  };
  return (
    <GiphyUI
      isGif={isGif}
      isClick={isClick}
      returnData={returnData}
      clickId={clickId}
      onClickTrending={onClickTrending}
      onClickImg={onClickImg}
      onClickSearch={onClickSearch}
      onChangeUserInput={onChangeUserInput}
      onSelectRating={onSelectRating}
      onChangeIsGIF={onChangeIsGIF}
      onChangeIsClips={onChangeIsClips}
      onClickClipsTrending={onClickClipsTrending}
      onClickClipsSearch={onClickClipsSearch}
      handleClose={handleClose}
    />
  );
}
