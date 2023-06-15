import {
  GetApprovalInfoRes,
  GetExpenseProcessingStatusByCategoryRes,
  SearchApprovalInfoRes,
} from "@/types/expense/ResponseType";
import { CustomAxios } from "../CusomAxios";
import Config from "@/config/config.export";
import { SearchApprovalInfoReq } from "@/types/expense/RequestType";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const { expenseServiceUrl } = Config();

export async function GetExpenseProcessingStatusByCategory(categoryId: number) {
  const response: GetExpenseProcessingStatusByCategoryRes =
    await CustomAxios.get(`${expenseServiceUrl}/api/v1/approval/status`, {
      params: {
        categoryId: categoryId,
      },
    }).then((res) => res.data);
  return response;
}

export function useGetExpenseProcessingStatusByCategory(categoryId: number) {
  return useQuery<GetExpenseProcessingStatusByCategoryRes, AxiosError>(
    ["getExpenseProcessingStatusbyCategory", categoryId],
    async () => await GetExpenseProcessingStatusByCategory(categoryId)
  );
}

export async function GetAllExpenseProcessingStatus() {
  const response: GetExpenseProcessingStatusByCategoryRes =
    await CustomAxios.get(
      `${expenseServiceUrl}/api/v1/approval/status/all`
    ).then((res) => res.data);
  return response;
}

export function useGetAllExpenseProcessingStatus() {
  return useQuery<GetExpenseProcessingStatusByCategoryRes, AxiosError>(
    ["getAllExpenseProcessingStatus"],
    async () => await GetAllExpenseProcessingStatus()
  );
}

export async function GetApprovalInfo(id: string) {
  const response: GetApprovalInfoRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/approval`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}

export async function SearchApprovalInfo(
  req: SearchApprovalInfoReq,
  page: number
) {
  const response: SearchApprovalInfoRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/approval/search`,
    {
      params: {
        startDate: req.startDate,
        endDate: req.endDate,
        status: req.status,
        categoryId: req.categoryId,
        page: page,
      },
    }
  ).then((res) => res.data);
  return response;
}
