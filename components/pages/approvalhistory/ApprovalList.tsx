import React, { useEffect, useRef, useState } from "react";
import style from "./ApprovalList.module.css";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import ApprovalItem from "@/components/ui/approvalhistory/ApprovalItem";
import { approvalList } from "@/datas/dummy/approvalListData";

export default function ApprovalList() {
  // return (
  //     <>
  //         {/* <div className={style.approval_menu}>
  //             <p>{approvalList.length}건</p>
  //             <div className={style.approval_menu_icon}>
  //                 <Image src='assets/images/icons/list.svg' alt='list' width={15} height={15} />
  //                 <select>
  //                     <option>최신순</option>
  //                     <option>기간순</option>
  //                 </select>
  //             </div>
  //         </div>
  //         {
  //             approvalList.map((item) => (
  //                 <ApprovalItem
  //                     key={item.id}
  //                     item={item}
  //                 />
  //             ))
  //         }
  //         <div className={style.approvalMoreBtn}>
  //             <Button size={'lg'} >더보기</Button>
  //         </div> */}

  const [approvalItems, setApprovalItems] = useState([]);
  const loding = useRef<boolean>(false);
  const [page, setPage] = useState({ current: 1, total: 0 });
  // useEffect(() => { fetchApprovalItems(page); }, []);
  // const fetchApprovalItems = async (page: number) => {
  //     const response = await fetch(`/api/approval-list?page=${page}&perPage=3`);
  //     const data = await response.json();
  //     setApprovalItems((prevItems) => { (...prevItems, data.items)});
  // };

  // const handleLoadMore = () => {
  //     setPage((prevPage) => prevPage + 1);
  // };

  return (
    <>
      <div className={style.approval_menu}>
        <p>{approvalItems.length}건</p>
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
      {/* {approvalItems.map((item) => (
                <ApprovalItem key={item.id} item={item} />
            ))}
            <div className={style.approvalMoreBtn}>
                <Button size={'lg'} onClick={handleLoadMore}>
                    더보기
                </Button>
            </div> */}
    </>
  );
}
