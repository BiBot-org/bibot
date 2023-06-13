import { SearchNoticeReq } from "@/types/notice/RequestType";
import { Navbar, PressEvent } from "@nextui-org/react";
import style from "./NoticeNav.module.css";
import React from "react";

export default function NoticeNav(props: {
  searchParam: SearchNoticeReq;
  setSearchParam: React.Dispatch<React.SetStateAction<SearchNoticeReq>>;
}) {
  const onHandleNavItem = (e: PressEvent) => {
    const targetId = e.target.id;
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
    <Navbar isCompact className={style.navbar} isBordered variant="floating">
      <Navbar.Content variant="highlight-rounded">
        <Navbar.Link
          id="all"
          isActive={setNoticeType("")}
          onPress={onHandleNavItem}
        >
          전체
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content variant="highlight-rounded">
        <Navbar.Link
          id="COMMON"
          isActive={setNoticeType("COMMON")}
          onPress={onHandleNavItem}
        >
          공지사항
        </Navbar.Link>
        <Navbar.Link
          id="SYSTEM"
          isActive={setNoticeType("SYSTEM")}
          onPress={onHandleNavItem}
        >
          시스템점검
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}
