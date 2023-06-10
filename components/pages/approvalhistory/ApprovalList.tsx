import React, { useRef, useState } from "react";
import style from "./ApprovalList.module.css";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import ApprovalItem from "@/components/ui/approvalhistory/ApprovalItem";
import { SearchApprovalInfoReq } from "@/types/expense/RequestType";
import { calculateThreeMonthAgo } from "@/utils/dateUtils";
import CategorySelectBox from "@/components/select/categorySelect";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SearchApprovalInfo } from "@/service/expense/ExpenseService";
import InfiniteScroll from "react-infinite-scroller";

export default function ApprovalList() {
  const [searchParam, setSearchParam] = useState<SearchApprovalInfoReq>({
    startDate: calculateThreeMonthAgo(new Date().toISOString().slice(0, 10)),
    endDate: new Date().toISOString().slice(0, 10),
  });

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParam({
      ...searchParam,
      categoryId: Number(e.target.value),
    });
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      [`searchApprovalInfo`, searchParam],
      ({ pageParam = 0 }) => SearchApprovalInfo(searchParam, pageParam),
      {
        getNextPageParam: (element) => {
          return element.data.last ? undefined : element.data.pageNo + 1;
        },
      }
    );

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section>
      <div className={style.dateWrap}>
        <Input
          aria-label="startDate"
          type="date"
          value={searchParam.startDate}
          max={today}
        />
        <span>-</span>
        <Input
          aria-label="endDate"
          type="date"
          value={searchParam.endDate}
          max={today}
        />
      </div>
      <div className={style.approval_menu}>
        {!isLoading && <p>{data?.pages[0].data.totalElements}건</p>}
        <div className={style.approval_menu_icon}>
          <Image
            src="assets/images/icons/list.svg"
            alt="list"
            width={15}
            height={15}
          />
          <select onChange={onChangeSelect}>
            <CategorySelectBox />
          </select>
        </div>
        <div className={style.approval_menu_icon}>
          <Image
            src="assets/images/icons/list.svg"
            alt="list"
            width={15}
            height={15}
          />
          <select>
            <option>최신순</option>
            <option>기간순</option>
          </select>
        </div>
      </div>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={() => fetchNextPage()}
        useWindow={false}
      >
        {!isLoading &&
          data?.pages.map((page) => {
            return page.data.content.map((history) => (
              <ApprovalItem key={history.id} item={history} />
            ));
          })}
      </InfiniteScroll>
    </section>
  );
}
