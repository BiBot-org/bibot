import React, { ReactNode, useCallback, useState } from 'react'
import style from 'styles/pages/cardusedlist.module.css'
import Image from 'next/image'
import Slider from 'react-slick'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import { cardListData } from '@/datas/dummy/cardListData'
import { useRouter } from 'next/router'
import CardImage from '@/components/ui/cardusedlist/CardImage'
import DeleteModal from '@/components/modal/cardUsedList/DeleteModal'
import UsedList from '@/components/widgets/cardUsedList/UsedList'


export default function CardUsedList() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    initialSlide: 1,
    arrows: false,
    afterChange: (current: number) => setCurrentIndex(current)
  }

  const handleCardClick = () => {
    if (currentIndex === 0) {
      router.push('/cardregister')
    }
  }

  return (
    <>
      <main className={style.mainContainer}>
      <DeleteModal ismodalopen={isModalOpen} handlemodal={setIsModalOpen}/>
        <Slider {...settings}>
          <div>
            <Image src='/assets/images/icons/emptycard.svg' alt='empty-card' width={327} height={200} onClick={handleCardClick} />
            <div className={style.card_empty}>카드를 등록해 주세요.</div>
          </div>
          {
            cardListData && cardListData.map((data) => {
              return (
                <div key={data.id} className={style.cardItem}>
                  <CardImage name={data.cardname} cardNumber={data.cardnumber} valid={data.validthru} />
                  <div className={style.card_delete_icon} onClick={() => setIsModalOpen(!isModalOpen)}>
                    <Image
                      src='/assets/images/icons/cardDeleteIcon.svg'
                      alt='card-delete-icon'
                      width={25}
                      height={25}
                    />
                  </div>
                  <div className={style.card_name}>{data.cardname}</div>
                </div>
              )
            })
          }
        </Slider>
        {
          currentIndex === 0 ?
            <div className={style.bibot_error_alarm}>
              <Image src='/assets/images/bibot-pic/bibot.svg' alt='bibot' width={25} height={25} />
              <div className={style.error_alarm}>카드를 등록해 주세요.</div>
            </div>
            : <UsedList />
        }
      </main>
    </>
  )
}


CardUsedList.getLayout = function getLayout(page: ReactNode) {
  return (
    <BackTitleLayout title='카드 사용 내역'>
      {page}
    </BackTitleLayout>
  )
}