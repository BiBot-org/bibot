import React, { useEffect, useState } from "react";
import { GetNoticeMain } from "@/service/notice/NoticeService";
import { NoticeDTO } from "@/types/notice/types";
import { AnnouncementPanel } from "./Announcement-panel";

export default function AnnounceMent() {
  const [noticeList, setNoticeList] = useState<NoticeDTO[]>([]);

  useEffect(() => {
    GetNoticeMain().then((res) => setNoticeList(res.data));
  }, []);

  return (
    <>
      {noticeList &&
        noticeList.map((notice) => (
          <>
            <AnnouncementPanel key={`notice : ${notice.id}`} notice={notice} />
          </>
        ))}
    </>
  );
}
