import CardImage from '@/components/ui/cardusedlist/CardImage'
import { cardListData } from '@/datas/dummy/cardListData'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import DeleteModal from '@/components/modal/cardUsedList/DeleteModal'
import { useRouter } from 'next/router'
import style from '@/components/pages/cardUsedList/CardSlide.module.css'
import UsedList from '@/components/widgets/cardUsedList/UsedList'
import { Spacer } from '@nextui-org/react'
import EmptyCardInfo from '@/components/ui/cardusedlist/EmptyCardInfo'

export default function CardSlide() {
    const router = useRouter()
    const [currentIndex, setCurrentIndex] = useState<number>(1)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '40px',
        initialSlide: 1,
        arrows: false,
        afterChange: (current: number) => setCurrentIndex(current),
    }

    const handleCardClick = () => {
        if (currentIndex === 0) {
            router.push('/cardregister')
        }
    }
    return (
        <>
            <DeleteModal ismodalopen={isModalOpen} handlemodal={setIsModalOpen} />
            <main style={{ display: 'flex', flexDirection: 'column', padding: '0', height: '100vh' }}>
                <Slider {...settings}>
                    <div className={style.cardItem}>
                        <Image
                            src='/assets/images/icons/emptycard.svg'
                            alt='empty-card'
                            width={327}
                            height={200}
                            onClick={handleCardClick}
                            style={{ width: '100%', height: '100%' }}
                            priority
                        />
                        <Spacer y={1} />
                        <div className={style.card_empty}>카드를 등록해 주세요.</div>
                    </div>
                    {
                        cardListData && cardListData.map((data) => {
                            return (
                                <div key={data.id} className={style.cardItem}>
                                    <CardImage name={data.cardname} cardNumber={data.cardnumber} valid={data.validthru} />
                                    <div className={style.card_delete_icon} onClick={() => setIsModalOpen(!isModalOpen)}>
                                        <Image
                                            aria-label='card-delete-icon'
                                            src='/assets/images/icons/cardDeleteIcon.svg'
                                            alt='card-delete-icon'
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                    <Spacer y={1} />
                                    <div className={style.card_name}>{data.cardname}</div>
                                </div>
                            )
                        })
                    }
                </Slider>

                {
                    currentIndex === 0 ?
                        <EmptyCardInfo />
                        : <UsedList />
                }
            </main>
        </>
    )
}
