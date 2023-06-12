import { SearchPaymentHistoryReq } from "@/types/payment/RequestTypes";
import {
  GetPaymentHistoryInfoRes,
  GetPaymentHistoryRes,
  SearchPaymentHistoryRes,
} from "@/types/payment/ResponseTypes";
import { CustomAxios } from "../CusomAxios";
import Config from "@/config/config.export";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const { cardServiceUrl } = Config();

export async function GetPaymentHistory(historyId: string) {
  const response: GetPaymentHistoryRes = await CustomAxios.get(
    `${cardServiceUrl}/api/v1/payment`,
    {
      params: {
        id: historyId,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetPaymentHistory(historyId: string) {
  return useQuery<GetPaymentHistoryRes, AxiosError>(
    ["getPaymentHistory", historyId],
    async () => await GetPaymentHistory(historyId)
  );
}

export async function GetPaymentHistoryByApprovalId(approvalId: string) {
  const response: GetPaymentHistoryInfoRes = await CustomAxios.get(
    `${cardServiceUrl}/api/v1/payment/approval`,
    {
      params: {
        id: approvalId,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetPaymentHistoryByApprovalId(approvalId: string) {
  return useQuery<GetPaymentHistoryInfoRes, AxiosError>(
    ["getPaymentHistoryByApprovalId", approvalId],
    async () => await GetPaymentHistoryByApprovalId(approvalId)
  );
}

export async function SearchPaymentHistory(
  req: SearchPaymentHistoryReq,
  page: number
) {
  const response: SearchPaymentHistoryRes = await CustomAxios.get(
    `${cardServiceUrl}/api/v1/payment/search`,
    {
      params: {
        cardId: req.cardId,
        startDate: req.startDate,
        endDate: req.endDate,
        page: page,
      },
    }
  ).then((res) => res.data);
  return response;
}
