import { SearchPaymentHistoryReq } from "@/types/payment/RequestTypes";
import {
  GetPaymentHistoryRes,
  SearchPaymentHistoryRes,
} from "@/types/payment/ResponseTypes";
import { CustomAxios } from "../CusomAxios";
import Config from "@/config/config.export";

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
