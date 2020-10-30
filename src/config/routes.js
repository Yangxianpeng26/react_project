import VerifyPhone from "@pages/regist/VerifyPhone";
import VerifyCode from "@pages/regist/VerifyCode";

// 路由配置文件
const routes = [
  {
    path: "/regist/verifycode",
    component: VerifyPhone,
    exact: true,
  },
  {
    path: "/regist/verifyPhone",
    component: VerifyCode,
    exact: true,
  },
];

export default routes;
