import React from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import NoticePost from '@/components/pages/noticedetail/NoticePost';


export default function Noticedetail() {
  
  return (
    <article style={{padding:'0 2rem'}}>
      <NoticePost />
    </article>
  );
}

Noticedetail.getLayout = function getLayout(page: React.ReactNode) {
  return <BackTitleLayout title="공지사항">{page}</BackTitleLayout>;
};
Noticedetail.auth = true;
