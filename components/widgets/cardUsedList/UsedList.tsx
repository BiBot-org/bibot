import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./UsedList.module.css";
import { cardUsedData } from "@/datas/dummy/cardUsedData";
import CardUsedItem from "@/components/ui/cardusedlist/CardUsedItem";
import { FormElement, Input, Spacer } from "@nextui-org/react";
import { SearchPaymentHistory } from "@/service/payment/PaymentService";
import { SearchPaymentHistoryInfo } from "@/types/payment/types";
import { SearchPaymentHistoryReq } from "@/types/payment/RequestTypes";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

interface Prop {
  cardId: number;
}

export default function UsedList({ cardId }: Prop) {
  const [historySum, setHistorySum] = useState<number>(0);

  const today = new Date().toISOString().slice(0, 10);

  const calculateThreeMonthAgo = (selectedDate: string) => {
    const currentDate = new Date(selectedDate);
    currentDate.setMonth(currentDate.getMonth() - 3);
    return currentDate.toISOString().slice(0, 10);
  };

  const [searchParam, setSearchParam] = useState<SearchPaymentHistoryReq>({
    cardId: cardId,
    startDate: calculateThreeMonthAgo(today),
    endDate: today,
    page: 0,
  } as SearchPaymentHistoryReq);

  const [searchPaymentHistoryInfo, setSearchPaymentHistoryInfo] =
    useState<SearchPaymentHistoryInfo>({} as SearchPaymentHistoryInfo);

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      [`searchPaymentHistory`, searchParam],
      ({ pageParam = 0 }) => SearchPaymentHistory(searchParam, pageParam),
      {
        getNextPageParam: (element) => {
          return element.data.isLast === true
            ? undefined
            : element.data.pageNo + 1;
        },
      }
    );

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

  return (
    <>
      <div className={style.usedListWrap}>
        <div className={style.card_used_sum}>
          <p>사용내역 합</p>
          <p>{historySum.toLocaleString()}원</p>
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
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={() => fetchNextPage()}
          useWindow={false}
        >
          {data?.pages.map((page) => {
            console.log(hasNextPage);
            return page.data.content.map((history) => (
              <CardUsedItem key={history.id} paymentHistory={history} />
            ));
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}
