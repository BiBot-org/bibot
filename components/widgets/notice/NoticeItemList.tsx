import NoticeItem from "@/components/ui/notice/NoticeItem";
import { GetNoticeMain } from "@/service/notice/NoticeService";
import { NoticeDTO } from "@/types/notice/types";
import React, { useEffect } from "react";

export default function NoticeItemList(props: {
  noticeList: NoticeDTO[];
  setNoticeList: React.Dispatch<React.SetStateAction<NoticeDTO[]>>;
}) {
  const { noticeList, setNoticeList } = props;

  useEffect(() => {
    GetNoticeMain().then((res) => {
      setNoticeList(res.data);
    });
  }, [setNoticeList]);

  return (
    <div>
      <p>{noticeList.length}건</p>
      <div>
        {noticeList &&
          noticeList.map((notice) => (
            <NoticeItem key={notice.id} notice={notice} />
          ))}
      </div>
    </div>
  );
}
