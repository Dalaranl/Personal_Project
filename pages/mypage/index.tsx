import { withAuth } from "../../src/components/commons/withAuth/withAuth";
import MyPage from "../../src/components/units/mypage/MyPage.container";

const MypagePage = () => {
  return <MyPage />;
};

export default withAuth(MypagePage);
