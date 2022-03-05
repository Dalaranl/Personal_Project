import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          alert("로그인이 필요합니다.");
          router.push("/login");
        }
      }
    }
    Auth();
  }, []);

  return <Component {...props} />;
};
