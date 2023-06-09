import { BibotUserInfo, UserAuthInfo } from "@/types/user/types";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "workspaceUrl",
  storage: localStorage,
});

export const userInfoState = atom<UserAuthInfo>({
  key: `userInfo`,
  default: {
    userId: "",
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
