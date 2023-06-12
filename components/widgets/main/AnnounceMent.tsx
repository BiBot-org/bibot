import React, { useEffect, useState } from "react";
import { GetNoticeMain } from "@/service/notice/NoticeService";
import { NoticeDTO } from "@/types/notice/types";
import { AnnouncementPanel } from "./Announcement-panel";
import Link from "next/link";

export default function AnnounceMent() {
  const [noticeList, setNoticeList] = useState<NoticeDTO[]>([]);

  useEffect(() => {
    GetNoticeMain().then((res) => setNoticeList(res.data));
  }, []);

  return (
    <>
      <p
        style={{
          width: "90%",
          margin: "0.5rem auto",
          padding: "0 1rem",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "var(--bibot-white)",
          }}
          href={"/notice"}
        >
          전체목록
        </Link>
      </p>
      {noticeList &&
        noticeList.map((notice) => (
          <AnnouncementPanel key={notice.id} notice={notice} />
        ))}
    </>
  );
}
