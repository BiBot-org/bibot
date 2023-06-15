import Config from "@/config/config.export";
import {
  getCategoryListRes,
  getCategoryRes,
} from "@/types/category/ResponseType";
import { CustomAxios } from "../CusomAxios";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const { expenseServiceUrl } = Config();

export async function getCategoryList() {
  const response: getCategoryListRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/category/all`
  ).then((res) => res.data);
  return response;
}

export function useGetCategoryList() {
  return useQuery(["getCategoryList"], async () => await getCategoryList());
}

export async function GetCategoryById(id: number) {
  const response: getCategoryRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/category`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetCategoryById(id: number) {
  return useQuery<getCategoryRes, AxiosError>(
    ["getCategoryById", id],
    async () => await GetCategoryById(id)
  );
}
