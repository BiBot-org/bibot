import NoticeItem from "@/components/ui/notice/NoticeItem";
import { SearchNotice } from "@/service/notice/NoticeService";
import { SearchNoticeReq } from "@/types/notice/RequestType";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";

export default function NoticeItemList(props: {
  searchParam: SearchNoticeReq;
}) {
  const { searchParam } = props;
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      ["searchNotice", searchParam],
      ({ pageParam = 0 }) => SearchNotice(searchParam, pageParam),
      {
        getNextPageParam: (lastPage) => {
          return lastPage.data.last ? undefined : lastPage.data.pageNo + 1;
        },
      }
    );

  return (
    <div>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={() => fetchNextPage()}
        useWindow={false}
      >
        {!(isLoading || isError) &&
          data?.pages.map((page) => {
            return page.data.content.map((notice) => (
              <NoticeItem key={notice.id} notice={notice} />
            ));
          })}
      </InfiniteScroll>
    </div>
  );
}
