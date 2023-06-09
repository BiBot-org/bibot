import React, { ChangeEvent, use, useCallback, useEffect, useRef, useState } from "react";
import style from "./UsedList.module.css";
import { cardUsedData } from "@/datas/dummy/cardUsedData";
import CardUsedItem from "@/components/ui/cardusedlist/CardUsedItem";
import { FormElement, Input, Spacer } from "@nextui-org/react";
import { SearchPaymentHistory } from "@/service/payment/PaymentService";
import { SearchPaymentHistoryInfo } from "@/types/payment/types";
import { SearchPaymentHistoryReq } from "@/types/payment/RequestTypes";
import InfiniteScroll from "react-infinite-scroll-component";


interface Prop {
  cardId: number;
}

export default function UsedList({ cardId }: Prop) {
  console.log('cardId', cardId);
  // const [historySum, setHistorySum] = useState<number>(0);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const today = new Date().toISOString().slice(0, 10);

  const calculateThreeMonthAgo = (selectedDate: string) => {
    const currentDate = new Date(selectedDate);
    currentDate.setMonth(currentDate.getMonth() - 3);
    return currentDate.toISOString().slice(0, 10);
  };

  const [searchParam, setSearchParam] = useState<SearchPaymentHistoryReq>({
    startDate: calculateThreeMonthAgo(today),
    endDate: today,
    cardId: cardId,
    page: 0,
  });

  const [searchPaymentHistoryInfo, setSearchPaymentHistoryInfo] =
    useState<SearchPaymentHistoryInfo>({
      content: [],
      pageNo: 0,
      last: false,
      totalElements: 0,
      totalPages: 0,
    });

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

  const nextPage = () => {
    if (isLastPage) return;
    setSearchParam({
      ...searchParam,
      page: searchParam.page + 1,
      cardId: cardId,
    });
  };

  useEffect(() => {
    if (isLastPage) return;
    const getData = async () => {
      SearchPaymentHistory(searchParam).then((res) => {
        setSearchPaymentHistoryInfo({
          ...res.data,
          content: [...searchPaymentHistoryInfo.content, ...res.data.content],
        });
        if (res.data.last) {
          setIsLastPage(true);
        }
      });
    }
    getData();
  }, [searchParam]);

  console.log('searchPaymentHistoryInfo', searchPaymentHistoryInfo);

  return (
    <>
      <div className={style.usedListWrap}>
        <div className={style.card_used_sum}>
          <p>사용내역 합</p>
          {/* <p>{historySum.toLocaleString()}원</p> */}
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
          dataLength={searchPaymentHistoryInfo.content?.length || 0}
          next={nextPage}
          hasMore={!isLastPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>더 이상 불러 올 데이터가 없습니다.</b>
            </p>
          }
        >
          {searchPaymentHistoryInfo.content &&
            searchPaymentHistoryInfo.content.map((data, idx) => (
              <CardUsedItem
                // key={`itm ${data.id}`}
                approvalId={data.approvalId || ""}
                title={data.paymentDestination}
                price={data.amount}
                date="2023-05-31"
                isRequested={data.isRequested}
              />
            ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
