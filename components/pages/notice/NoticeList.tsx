"use client";
import React, { useState } from "react";
import NoticeNav from "@/components/ui/notice/NoticeNav";
import SearchInput from "@/components/ui/notice/SearchInput";
import { Spacer } from "@nextui-org/react";
import NoticeItemList from "@/components/widgets/notice/NoticeItemList";
import { SearchNoticeReq } from "@/types/notice/RequestType";

export default function NoticeList() {
  const [searchParam, setSearchParam] = useState<SearchNoticeReq>({
    title: "",
    type: "",
    page: 0,
  } as SearchNoticeReq);

  return (
    <>
      <NoticeNav searchParam={searchParam} setSearchParam={setSearchParam} />
      <Spacer y={1} />
      <SearchInput searchParam={searchParam} setSearchParam={setSearchParam} />
      <Spacer y={1} />
      <NoticeItemList searchParam={searchParam} />
      <Spacer y={1} />
    </>
  );
}
