import { SearchNoticeReq } from "@/types/notice/RequestType";
import style from "./NoticeNav.module.css";
import React from "react";

export default function NoticeNav(props: {
  searchParam: SearchNoticeReq;
  setSearchParam: React.Dispatch<React.SetStateAction<SearchNoticeReq>>;
}) {
  const onHandleNavItem = (id: string) => {
    const targetId = id
    if (targetId === "all") {
      props.setSearchParam({
        ...props.searchParam,
        type: "",
      });
    } else if (targetId === "COMMON") {
      props.setSearchParam({
        ...props.searchParam,
        type: "COMMON",
      });
    } else if (targetId === "SYSTEM") {
      props.setSearchParam({
        ...props.searchParam,
        type: "SYSTEM",
      });
    }
  };

  const setNoticeType = (classtype: string) => {
    return props.searchParam.type === classtype ? true : false;
  };

  return (
    <div className={style.navbarWrap}>
      <nav>
        <ul>
          <li
            id="all"
            className={setNoticeType("") ? style.active : ""}
            onClick={() => onHandleNavItem('all')}
          >
            전체
          </li>
          <li
            id="COMMON"
            className={setNoticeType("COMMON") ? style.active : ""}
            onClick={() => onHandleNavItem('COMMON')}
          >
            공지사항
          </li>
          <li
            id="SYSTEM"
            className={setNoticeType("SYSTEM") ? style.active : ""}
            onClick={() => onHandleNavItem('SYSTEM')}
          >
            시스템점검
          </li>
        </ul>
      </nav>
    </div>
  );
}
