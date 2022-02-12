import { loginUrl } from "../../../src/components/units/spotify/spotify";

export default function Login() {
  return (
    <div>
      <a href={loginUrl} style={{ backgroundColor: "#1b1b1b", border: "0px" }}>
        Login With Spotify
      </a>
    </div>
  );
}
