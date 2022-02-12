import { useEffect, useState } from "react";
// import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../../src/components/units/spotify/spotify";
import Login from "./login";

// const spotify = new SpotifyWebApi();

export default function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash: any = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log("token", token);
  }, []);

  return <div className="app">{token ? <h1>Logged</h1> : <Login />}</div>;
}
