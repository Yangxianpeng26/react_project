import request from "src/uitils/request";

//当前公共的地址前缀
const url_prefix = "/login";

export const reqSendCode = (phone) => {
  return request({
    method: "POST",
    url: `${url_prefix}/digits`,
    data: {
      phone,
    },
  });
};
