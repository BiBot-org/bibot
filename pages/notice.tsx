import BackNotiLayout from '@/components/layouts/BackNotiLayout'
import Separator from '@/components/ui/Separator'
import React from 'react'
import style from 'styles/pages/notice.module.css'

export default function notice() {
  return (
    <div className={style.notice_wrap}>
      {/* <div className={style.notice_header}>
      <img src='/assets//images/icons/back_gray.svg' alt='bell' className='back_gray' />
      <h1 className={style.notice_h1}>공지사항</h1>
        <img src='/assets//images/icons/bell.svg' alt='bell' className='bell' />
      </div> */}
      <Separator gutter={7} />

      <ul className={style.notice_nav_wrap}>
        <li><a href=''>전체</a></li>
        <li><a href=''>공지사항</a></li>
        <li><a href=''>시스템점검</a></li>
        <li><a href=''>기타</a></li>
      </ul>
      <p className={style.notice_sum}>전체 200건</p>
      <div className={style.notice_search_wrap}>
        <select className={style.notice_search}>
          <option selected>전체</option>
          <option>제목</option>
          <option>내용</option>
        </select>
        <div className={style.notice_texting}>
          <input type='text' placeholder='검색어를 입력해주세요'></input>
          <img src='/assets/images/icons/glasses.svg' alt='glasses' className='glasses' />
        </div>
      </div>
      <div className={style.notice_board_wrap}>
        <div className={style.notice_first}>
          <p>공지</p>
        </div>
        <div className={style.notice_board}>
          <p>5월 1일부터 제휴식당이 추가될...</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_first}>
          <p>공지</p>
        </div>
        <div className={style.notice_board}>
          <p>5월 1일부터 제휴식당이 추가될...</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_second}>
          <p>시스템점검</p>
        </div>
        <div className={style.notice_board}>
          <p>05.10(수)시스템 정기 점검...</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_second}>
          <p>시스템점검</p>
        </div>
        <div className={style.notice_board}>
          <p>05.10(수)시스템 정기 점검...</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_second}>
          <p>시스템점검</p>
        </div>
        <div className={style.notice_board}>
          <p>05.10(수)시스템 정기 점검...</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <div className={style.notice_board_list}>
        <div className={style.notice_second}>
          <p>시스템점검</p>
        </div>
        <div className={style.notice_board}>
          <p>05.10(수)시스템 정기 점검...</p>
          <p>2023-04-25</p>
        </div>
      </div>
      <button className={style.notice_btn}>더보기</button>
    </div>
  )
}

notice.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BackNotiLayout>{page}</BackNotiLayout>
  )
}