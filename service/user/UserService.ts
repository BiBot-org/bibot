import { GetUserInfoRes, GetUserRes } from "@/types/user/ResponseType";
import { CustomAxios } from "../CusomAxios";
import Config from "@/config/config.export";
import { useQuery } from "@tanstack/react-query";

const { userServiceUrl } = Config();

export async function GetUser(userId: string) {
  const response: GetUserRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/user`,
    {
      params: {
        id: userId,
      },
    }
  ).then((res) => res.data);
  return response;
}

export async function GetUserInfo(userId: string) {
  const response: GetUserInfoRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/user/info`,
    {
      params: {
        id: userId,
      },
    }
  ).then((res) => res.data);
  return response;
}
