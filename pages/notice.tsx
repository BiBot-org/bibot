import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import Image from 'next/image'
import React from 'react'
import style from 'styles/pages/notice.module.css'

export default function Notice() {
  return (
    <div className={style.notice_wrap}>
      <ul className={style.notice_nav_wrap}>
        <li><a href=''>전체</a></li>
        <li><a href=''>공지사항</a></li>
        <li><a href=''>시스템점검</a></li>
      </ul>
      <div className={style.notice_search_wrap}>
        <div className={style.notice_texting}>
          <input type='text' placeholder='검색어를 입력해주세요'></input>
          <Image src={'/assets/images/icons/glasses.svg'} alt='glasses' width={20} height={20} />
        </div>
      </div>
      <p className={style.notice_sum}>218건</p>
      <div className={style.notice_board_wrap}>
        <div className={style.notice_first}>
          <p>공지</p>
        </div>
        <div className={style.notice_board}>
          <p>시스템 점검 안내</p>
          <p className={style.notice_board_second}>익일 10:00~13:30 시스템 점검을 할지도 모릅니다.</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_first}>
          <p>공지</p>
        </div>
        <div className={style.notice_board}>
          <p>시스템 점검 안내</p>
          <p className={style.notice_board_second}>익일 10:00~13:30 시스템 점검을 할지도 모릅니다.</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_second}>
          <p>시스템점검</p>
        </div>
        <div className={style.notice_board}>
        <p>시스템 점검 안내</p>
          <p className={style.notice_board_second}>익일 10:00~13:30 시스템 점검을 할지도 모릅니다.</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_second}>
          <p>시스템점검</p>
        </div>
        <div className={style.notice_board}>
        <p>시스템 점검 안내</p>
          <p className={style.notice_board_second}>익일 10:00~13:30 시스템 점검을 할지도 모릅니다.</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <button className={style.notice_btn}><p>더보기</p></button>
    </div>
  )
}

Notice.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='공지사항'>
      {page}
    </BackTitleLayout>
  )
}
