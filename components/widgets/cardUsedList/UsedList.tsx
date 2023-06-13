import React, { ChangeEvent, useState } from "react";
import style from "./UsedList.module.css";
import CardUsedItem from "@/components/ui/cardusedlist/CardUsedItem";
import { FormElement, Input, Spacer } from "@nextui-org/react";
import { SearchPaymentHistory } from "@/service/payment/PaymentService";
import { SearchPaymentHistoryReq } from "@/types/payment/RequestTypes";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

interface Prop {
  cardId: number;
}

export default function UsedList({ cardId }: Prop) {
  const offset = new Date().getTimezoneOffset() * 60000;
  const today = new Date(Date.now() - offset).toISOString().slice(0, 10);

  const calculateThreeMonthAgo = (selectedDate: string) => {
    const currentDate = new Date(selectedDate);
    currentDate.setMonth(currentDate.getMonth() - 3);
    return currentDate.toISOString().slice(0, 10);
  };

  const [searchParam, setSearchParam] = useState<SearchPaymentHistoryReq>({
    cardId: cardId,
    startDate: calculateThreeMonthAgo(today),
    endDate: today,
  } as SearchPaymentHistoryReq);

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      [`searchPaymentHistory`, searchParam],
      ({ pageParam = 0 }) => SearchPaymentHistory(searchParam, pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          return lastPage.data.last ? undefined : lastPage.data.pageNo + 1;
        },
      }
    );

  const handleDateChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<FormElement>
  ) => {
    const { name, value } = e.target;

    setSearchParam({
      ...searchParam,
      [name]: value,
    });
  };

  return (
    <>
      <div className={style.usedListWrap}>
        <div className={style.dateWrap}>
          <Input
            aria-label="threeMonthAgo"
            type="date"
            name="startDate"
            value={searchParam.startDate}
            onChange={handleDateChange}
            max={today}
          />
          <span>-</span>
          <Input
            aria-label="today"
            type="date"
            name="endDate"
            value={searchParam.endDate}
            onChange={handleDateChange}
            max={today}
          />
        </div>
        <Spacer y={1} />
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={() => fetchNextPage()}
          useWindow={false}
        >
          {!(isLoading || isError) &&
            data?.pages.map((page) => {
              return page.data.content.map((history) => (
                <CardUsedItem key={history.id} paymentHistory={history} />
              ));
            })}
        </InfiniteScroll>
      </div>
    </>
  );
}
