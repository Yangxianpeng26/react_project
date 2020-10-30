import VerifyPhone from "@pages/regist/VerifyPhone";
import VerifyCode from "@pages/regist/VerifyCode";
import VerifyPassword from "@pages/regist/VerifyPassword";

// 路由配置文件
const routes = [
  {
    path: "/regist/verifyPhone",
    component: VerifyPassword,
    exact: true,
  },
  {
    path: "/regist/verifycode",
    component: VerifyCode,
    exact: true,
  },
  {
    path: "/regist/verifyPhone",
    component: VerifyPhone,
    exact: true,
  },
];

export default routes;
