import { useGetNotice } from "@/service/notice/NoticeService";
import { useRouter } from "next/router";
import React from "react";
import NoticeContents from "@/components/widgets/noticedetail/NoticeContents";

export default function NoticePost() {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  const { isLoading, data, isError } = useGetNotice(id);

  return (
    <>
      {!(isLoading || isError) && (
        <>
          <NoticeContents
            title={data.data.title}
            content={data.data.content}
            type={data.data.type}
            updateTime={data.data.updateTime}
          />
        </>
      )}
    </>
  );
}
