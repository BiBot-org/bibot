import Config from "@/config/config.export";
import { CustomAxios } from "../CusomAxios";
import { GetNoticeMainRes } from "@/types/notice/ResponseType";

const { userServiceUrl } = Config();
export async function GetNoticeMain() {
  const response: GetNoticeMainRes = await CustomAxios.get(
    userServiceUrl + "/api/v1/notice/main"
  ).then((res) => res.data);
  return response;
}
