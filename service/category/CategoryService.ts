import Config from "@/config/config.export";
import { getCategoryListRes } from "@/types/category/ResponseType";
import { CustomAxios } from "../CusomAxios";

const { expenseServiceUrl } = Config();

export async function getCategoryList() {
  const response: getCategoryListRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/category/all`
  ).then((res) => res.data);
  return response;
}
