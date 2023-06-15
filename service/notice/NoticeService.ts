import Config from "@/config/config.export";
import { CustomAxios } from "../CusomAxios";
import {
  GetNoticeMainRes,
  GetNoticeRes,
  SearchNoticeRes,
} from "@/types/notice/ResponseType";
import { SearchNoticeReq } from "@/types/notice/RequestType";
import { useQuery } from "@tanstack/react-query";

const { userServiceUrl } = Config();

export async function GetNoticeMain() {
  const response: GetNoticeMainRes = await CustomAxios.get(
    userServiceUrl + "/api/v1/notice/main"
  ).then((res) => res.data);
  return response;
}

export async function GetNotice(id: number) {
  const response: GetNoticeRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/notice`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetNotice(id: number) {
  return useQuery(["getNotice", id], async () => await GetNotice(id));
}

export async function SearchNotice(searchParam: SearchNoticeReq, page: number) {
  const response: SearchNoticeRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/notice/search`,
    {
      params: {
        title: searchParam.title,
        page: page,
        type: searchParam.type,
      },
    }
  ).then((res) => res.data);
  return response;
}
