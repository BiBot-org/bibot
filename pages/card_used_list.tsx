import React, { ReactNode, useState } from 'react'
import style from 'styles/pages/card_used_list.module.css'
import Image from 'next/image'
import Slider from 'react-slick'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import Used_list from '@/components/widgets/card_used_list/Used_list'
import { cardListData } from '@/datas/dummy/cardListData'
import { useRouter } from 'next/router'


export default function Card_used_list() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState<number>(1)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    initialSlide: 1,
    afterChange: (current: number) => setCurrentIndex(current)
  }

  return (
    <>
      <body>
        <Slider {...settings}>
          <div>
            <Image src='/assets/images/icons/empty_card.svg' alt='empty-card' width={327} height={200} onClick={() => router.push('/card_step1')} />
            <div className={style.card_empty}>카드를 등록해 주세요.</div>
          </div>
          {
            cardListData && cardListData.map((data) => {
              return (
                <div key={data.id}>
                  <Image src='/assets/images/icons/registered_card.svg' alt='registered-card' width={327} height={200} />
                  <div className={style.card_name}>{data.cardname}</div>
                </div>
              )
            })
          }
        </Slider>
        {
          currentIndex === 0 ? <div className={style.bibot_error_alarm}>
            <Image src='/assets/images/bibot-pic/bibot.svg' alt='bibot' width={25} height={25} />
            <div className={style.error_alarm}>카드를 등록해 주세요.</div>
          </div> : <Used_list />
        }
      </body>
    </>
  )
}


Card_used_list.getLayout = function getLayout(page: ReactNode) {
  return (
    <BackTitleLayout title='카드 사용 내역'>
      {page}
    </BackTitleLayout>
  )
}