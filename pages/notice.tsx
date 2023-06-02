import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import React from 'react'
import NoticeList from '@/components/pages/notice/NoticeList';

export default function Notice() {
  return (
    <main>
      <NoticeList />
    </main>
  );
}

Notice.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title="공지사항">
      {page}
    </BackTitleLayout>
  )
};

Notice.auth = true;
