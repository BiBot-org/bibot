import React from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import style from 'styles/module.css/notice_details.module.css'
import Image from 'next/image'

export default function notice_details() {
  return (
    <div className={style.notice_details_wrap}>
      <div className={style.notice_border}></div>
      <div className={style.notice_details_header}>
        <h2>23.05.24(수) 서비스 정기 점검 실시 안내</h2>
        <div className={style.detail_date}>
          <p>시스템점검</p>
          <p>2023.05.16</p>
        </div>
      </div>
      <div className={style.notice_detail_words}>
        <p>
          안녕하세요<br />
          직원 여러분들게 5월 서비스 점검 일정 안내 드립니다.<br />
          일정 : 2023.05.24(수) 00시~07시<br />
          &#42;작업 영향도에 따라 일정은 변동될 수 있습니다.<br />
          &#42;점검시간동안 영수증 결재처리는 이용하실 수 없습니다.<br />
          감사합니다.
        </p>
      </div>
      <div className={style.notice_details_list_b}>
      <Image src={'/assets/images/icons/back.svg'} alt='back' width={20} height={20} />
      <p>이전글</p>
      <p className={style.notice_icon}>공지</p>
      <p className={style.detail_words}>서비스이용약관 개정 안내 7월</p>
      </div>
      <div className={style.notice_details_list_n}>
      <Image src={'/assets/images/icons/back.svg'} alt='back' width={20} height={20} />
      <p>다음글</p>
      <p className={style.notice_icon}>공지</p>
      <p className={style.detail_words}>5월1일 근로자의날 고객센터 휴무</p>
      </div>
      <button className={style.notice_btn}><p>목록</p></button>
    </div>
  )
}

notice_details.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='공지사항'>
      {page}
    </BackTitleLayout>
  )
}
