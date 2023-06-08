"use client";
import React, { useState } from "react";
import NoticeNav from "@/components/ui/notice/NoticeNav";
import SearchInput from "@/components/ui/notice/SearchInput";
import { Button, Spacer } from "@nextui-org/react";
import NoticeItemList from "@/components/widgets/notice/NoticeItemList";
import { NoticeDTO } from "@/types/notice/types";

export default function NoticeList() {
  const [noticeList, setNoticeList] = useState<NoticeDTO[]>([]);

  return (
    <>
      <NoticeNav noticeList={noticeList} setNoticeList={setNoticeList} />
      <Spacer y={1} />
      <SearchInput setNoticeList={setNoticeList} />
      <Spacer y={1} />
      <NoticeItemList noticeList={noticeList} setNoticeList={setNoticeList} />
      <Spacer y={1} />
      <div>
        <Button
          aria-label="more"
          style={{
            margin: "0 auto",
            backgroundColor: "var(--bibot-primary)",
          }}
        >
          더보기
        </Button>
      </div>
    </>
  );
}
