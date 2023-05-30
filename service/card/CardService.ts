import Config from "@/config/config.export";
import { GetAllCardRes } from "@/types/card/ResponseTypes";
import { CustomAxios } from "../CusomAxios";
import { CreateCardReq } from "@/types/card/RequestTypes";

const { cardServiceUrl } = Config();

export async function GetAllCard() {
  const response: GetAllCardRes = await CustomAxios.get(
    `${cardServiceUrl}/api/v1/card/all`
  ).then((res) => res.data);
  return response;
}

export async function AddCard(req: CreateCardReq) {
  return await CustomAxios.post(`${cardServiceUrl}/api/v1/card`, req).then(
    (res) => res.data
  );
}

export async function DeleteCard(cardId: number) {
  return await CustomAxios.delete(`${cardServiceUrl}/api/v1/card`, {
    params: {
      id: cardId,
    },
  }).then((res) => res.data);
}
