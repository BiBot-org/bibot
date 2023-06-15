import {
  UploadReceiptImageReq,
  UploadReceiptReq,
} from "@/types/receipt/RequestType";
import { CustomAxios } from "../CusomAxios";
import Config from "@/config/config.export";
import { GetReceiptInfoRes } from "@/types/receipt/ResponseType";
import { useQuery } from "@tanstack/react-query";
const { receiptServiceUrl } = Config();

export async function UploadReceiptImage(req: UploadReceiptImageReq) {
  const formData = new FormData();
  formData.append("file", req.file);
  formData.append("cardId", `${req.cardId}`);
  formData.append("categoryId", `${req.categoryId}`);
  formData.append("paymentId", `${req.paymentId}`);
  formData.append("regTime", `${req.regTime}`);
  return CustomAxios.post(
    `${receiptServiceUrl}/api/v1/receipt/image`,
    formData,
    {
      headers: {
        "Content-Type": "application/form-data",
      },
    }
  ).then((res) => res.data);
}

export async function RequestOCR(req: UploadReceiptReq) {
  const formData = new FormData();
  formData.append("file", req.file);
  formData.append("regTime", `${req.regTime}`);
  return await CustomAxios.post(
    `${receiptServiceUrl}/api/v1/receipt`,
    formData,
    {
      headers: {
        "Content-Type": "application/form-data",
      },
    }
  ).then((res) => res.data);
}

export async function GetReceiptInfo(id: string) {
  const response: GetReceiptInfoRes = await CustomAxios.get(
    `${receiptServiceUrl}/api/v1/receipt`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetReceiptInfo(id: string) {
  return useQuery([`getReceiptInfo`, id], async () => await GetReceiptInfo(id));
}

export async function GetReceiptInfoByApprovalId(id: string) {
  const response: GetReceiptInfoRes = await CustomAxios.get(
    `${receiptServiceUrl}/api/v1/receipt/approval`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetReceiptInfoByApprovalId(id: string) {
  return useQuery(
    ["getReceiptInfoByApprovalId", id],
    async () => await GetReceiptInfoByApprovalId(id)
  );
}
