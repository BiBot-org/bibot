import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v1 } from "uuid";
import { iWorkspaceUrl } from "./type";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "workspaceUrl",
  storage: localStorage,
});

export const workspaceState = atom<iWorkspaceUrl>({
  key: `workspaceUrl`,
  default: {
    url: "",
  },
  effects_UNSTABLE: [persistAtom],
});
