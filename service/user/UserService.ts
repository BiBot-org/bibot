import { GetUserInfoRes, GetUserRes } from "@/types/user/ResponseType";
import { CustomAxios } from "../CusomAxios";
import Config from "@/config/config.export";
import { useQuery } from "@tanstack/react-query";
import { UpdateProfileReq } from "@/types/user/RequestType";

const { userServiceUrl } = Config();

export async function GetMyInfo() {
  const response: GetUserInfoRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/user/myInfo`
  ).then((res) => res.data);
  return response;
}

export function useGetMyInfo() {
  return useQuery(["getMyInfo"], async () => await GetMyInfo());
}

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

export function useGetUser(userId: string) {
  return useQuery(["getUser", userId], async () => await GetUser(userId));
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

export function useGetuserinfo(userId: string) {
  return useQuery(
    ["getUserInfo", userId],
    async () => await GetUserInfo(userId)
  );
}

export async function UploadUserProfileImage(req: UpdateProfileReq) {
  const formData = new FormData();
  formData.append("profile_url", req.profileImage);
  return CustomAxios.post(`${userServiceUrl}/api/v1/user/profile`, formData, {
    headers: {
      "Content-Type": "application/form-data",
    },
  }).then((res) => res.data);
}

export async function SendConfirmEmail(email: string) {
  return CustomAxios.get(`${userServiceUrl}/public/v1/user/verify/email`, {
    params: {
      email: email,
    },
  }).then((res) => res.data);
}

interface VerifyEmailReq {
  email: string;
  verifyCode: string;
}

export async function SendResetPasswordReq(req: VerifyEmailReq) {
  return CustomAxios.post(
    `${userServiceUrl}/public/v1/user/password/reset/email`,
    req
  ).then((res) => res.data);
}
