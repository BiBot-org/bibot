import React from "react";
import style from "@/components/ui/notice/NoticeItem.module.css";
import { useRouter } from "next/navigation";
import { Spacer } from "@nextui-org/react";
import { noticeType } from "@/datas/notice/noticeStatus";
import { noticeStatus } from "@/datas/notice/noticeBackGround";
import { NoticeDTO } from "@/types/notice/types";

export default function NoticeItem(props: { notice: NoticeDTO }) {
  const router = useRouter();
  const notice = props.notice;

  const statusBackground = {
    backgroundColor: noticeStatus[notice.type],
  };

  return (
    <>
      <div className={style.notice_board_wrap}>
        <Spacer y={0.5} />
        <div className={style.notice_first} style={statusBackground}>
          <p>{noticeType[notice.type]}</p>
        </div>
        <div
          className={style.notice_board}
          onClick={() => router.push(`/noticedetail/${notice.id}`)}
        >
          <p>{notice.title}</p>
          <p className={style.notice_board_second}>{notice.content}</p>
          <p>{notice.updateTime.slice(0, 10)}</p>
        </div>
        <Spacer y={1} />
      </div>
    </>
  );
}
