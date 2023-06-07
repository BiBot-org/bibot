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
      <div
        style={{
          backgroundColor: "#ffffff40",
          width: "90%",
          margin: "0 auto",
          paddingTop: "0.7rem",
          borderRadius: "10px",
          height: "20rem",
          overflowY: "scroll",
        }}
      >
        <p
          style={{
            textAlign: "right",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "var(--bibot-primary)",
            }}
            href={"/notice"}
          >
            전체목록
          </Link>
        </p>
        {noticeList &&
          noticeList.map((notice) => (
            <AnnouncementPanel key={`notice : ${notice.id}`} notice={notice} />
          ))}
      </div>
    </>
  );
}
