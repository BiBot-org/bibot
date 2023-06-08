import { UploadReceiptImageReq } from "@/types/receipt/RequestType";
import { CustomAxios } from "../CusomAxios";
import Config from "@/config/config.export";
const { receiptServiceUrl } = Config();

export async function UploadReceiptImage(req: UploadReceiptImageReq) {
  const formData = new FormData();
  formData.append("file", req.file);
  formData.append("cardId", `${req.cardId}`);
  formData.append("categoryId", `${req.categoryId}`);
  formData.append("paymentId", `${req.paymentId}`);
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
