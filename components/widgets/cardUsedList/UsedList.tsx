import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./UsedList.module.css";
import { cardUsedData } from "@/datas/dummy/cardUsedData";
import CardUsedItem from "@/components/ui/cardusedlist/CardUsedItem";
import { FormElement, Input, Spacer } from "@nextui-org/react";
import { SearchPaymentHistory } from "@/service/payment/PaymentService";
import { SearchPaymentHistoryInfo } from "@/types/payment/types";
import { SearchPaymentHistoryReq } from "@/types/payment/RequestTypes";

interface Prop {
  cardId: number;
}

export default function UsedList({ cardId }: Prop) {
  const today = new Date().toISOString().slice(0, 10);

  const calculateThreeMonthAgo = (selectedDate: string) => {
    const currentDate = new Date(selectedDate);
    currentDate.setMonth(currentDate.getMonth() - 3);
    return currentDate.toISOString().slice(0, 10);
  };

  const [searchParam, setSearchParam] = useState<SearchPaymentHistoryReq>({
    startDate: calculateThreeMonthAgo(today),
    endDate: today,
    page: 1,
  } as SearchPaymentHistoryReq);

  const [searchPaymentHistoryInfo, setSearchPaymentHistoryInfo] =
    useState<SearchPaymentHistoryInfo>({} as SearchPaymentHistoryInfo);

  const handleRightDateChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<FormElement>
  ) => {
    const selectedDate = e.target.value;
    const currentDate = new Date();
    const selected = new Date(selectedDate);

    if (selected <= currentDate) {
      setSearchParam({
        ...searchParam,
        startDate: calculateThreeMonthAgo(selectedDate),
        endDate: selectedDate,
      });
    } else {
      setSearchParam({
        ...searchParam,
        startDate: calculateThreeMonthAgo(today),
        endDate: today,
      });
    }
  };

  //구현해야 합니다
  const sum = cardUsedData.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  useEffect(() => {
    SearchPaymentHistory({
      cardId: cardId,
      ...searchParam,
    }).then((res) => setSearchPaymentHistoryInfo(res.data));
  }, [cardId, searchParam]);

  return (
    <>
      <div className={style.card_used_sum}>
        <p>사용내역 합</p>
        <p>{sum.toLocaleString()}원</p>
      </div>
      <div className={style.dateWrap}>
        <Input
          aria-label="threeMonthAgo"
          type="date"
          value={searchParam.startDate}
          readOnly
        />
        <span>-</span>
        <Input
          aria-label="today"
          type="date"
          value={searchParam.endDate}
          onChange={handleRightDateChange}
          max={today}
        />
      </div>
      <Spacer y={1} />
      {searchPaymentHistoryInfo.content &&
        searchPaymentHistoryInfo.content.map((data, idx) => (
          <>
            <CardUsedItem
              key={`itm ${data.id}`}
              approvalId={data.approvalId || ""}
              title={data.paymentDestination}
              price={data.amount}
              date="2023-05-31"
              isRequested={data.isRequested}
            />
          </>
        ))}
    </>
  );
}
