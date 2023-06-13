import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FormElement, Input } from "@nextui-org/react";
import { SearchNotice } from "@/service/notice/NoticeService";
import { SearchNoticeReq } from "@/types/notice/RequestType";
import { NoticeDTO } from "@/types/notice/types";

export default function SearchInput(props: {
  searchParam: SearchNoticeReq;
  setSearchParam: React.Dispatch<React.SetStateAction<SearchNoticeReq>>;
}) {
  const { searchParam, setSearchParam } = props;

  const onInputChange = (event: React.ChangeEvent<FormElement>) => {
    setSearchParam({
      ...searchParam,
      title: event.target.value,
    });
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
        }}
      >
        <Input
          aria-label="search"
          type="text"
          placeholder="검색어를 입력해주세요"
          bordered
          size="lg"
          width="100%"
          color="primary"
          contentRight={
            <Image
              aria-label="glasses"
              src={"/assets/images/icons/glasses.svg"}
              alt="glasses"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          }
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
