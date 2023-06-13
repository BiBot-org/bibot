"use client";
import CardImage from "@/components/ui/cardusedlist/CardImage";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import DeleteModal from "@/components/modal/cardUsedList/DeleteModal";
import { useRouter } from "next/router";
import style from "@/components/pages/cardUsedList/CardSlide.module.css";
import UsedList from "@/components/widgets/cardUsedList/UsedList";
import { Spacer } from "@nextui-org/react";
import EmptyCardInfo from "@/components/ui/cardusedlist/EmptyCardInfo";
import { CardInfoRes } from "@/types/card/types";
import { GetAllCard } from "@/service/card/CardService";

export default function CardSlide() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardInfoList, setCardInfoList] = useState<CardInfoRes[]>([]);
  const [cardId, setCardId] = useState<number>(1);
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "40px",
    initialSlide: 1,
    arrows: false,
    afterChange: (current: number) => {
      setCurrentIndex(current), setCardId(cardInfoList[current - 1]?.id);
    },
  };

  const handleCardClick = () => {
    if (currentIndex === 0) {
      router.push("/cardregister");
    }
  };

  useEffect(() => {
    GetAllCard().then((res) => {
      setCardInfoList(res.data);
      setCardId(res.data[0]?.id);
    });
  }, []);

  return (
    <>
      <DeleteModal
        ismodalopen={isModalOpen}
        handlemodal={setIsModalOpen}
        cardId={cardId}
      />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0",
          height: currentIndex === 0 ? "100vh" : "auto",
        }}
      >
        <Slider {...settings}>
          <div className={style.cardItem}>
            <Image
              src="/assets/images/icons/emptycard.svg"
              alt="empty-card"
              width={327}
              height={200}
              onClick={handleCardClick}
              style={{ width: "100%", height: "100%" }}
              priority
            />
            <Spacer y={1} />
            <div className={style.card_empty}>카드를 등록해 주세요.</div>
          </div>
          {cardInfoList &&
            cardInfoList.map((data) => {
              return (
                <div key={data.id} className={style.cardItem}>
                  <CardImage
                    name={data.cardCompany}
                    cardNumber={data.cardNo}
                    valid={data.cardValid}
                  />
                  <div
                    className={style.card_delete_icon}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  >
                    <Image
                      aria-label="card-delete-icon"
                      src="/assets/images/icons/cardDeleteIcon.svg"
                      alt="card-delete-icon"
                      width={25}
                      height={25}
                    />
                  </div>
                  <Spacer y={1} />
                  <div className={style.card_name}>{data.cardCompany}</div>
                </div>
              );
            })}
        </Slider>
        {currentIndex === 0 || cardInfoList.length === 0 ? (
          <EmptyCardInfo />
        ) : (
          <UsedList cardId={cardId} />
        )}
      </main>
    </>
  );
}
