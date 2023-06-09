import React, { useEffect, useMemo, useRef, useState } from "react";
import style from "@/components/widgets/main/CategoryNav.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Progress } from "@nextui-org/react";
import { useRouter } from "next/router";
import { CategoryDTO } from "@/types/category/types";
import { getCategoryList } from "@/service/category/CategoryService";
import {
  GetAllExpenseProcessingStatus,
  GetExpenseProcessingStatusByCategory,
} from "@/service/expense/ExpenseService";
import { ExpenseProcessingStatusByCategory } from "@/types/expense/types";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

export interface reminderType {
  id: number;
  amount: number;
  reset: number;
  resetDay: string;
  resetTime: number;
}

export default function CategoryNav() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [expenseProcessingStatus, setExpenseProcessingStatus] =
    useState<ExpenseProcessingStatusByCategory>(
      {} as ExpenseProcessingStatusByCategory
    );
  const targetRef = useRef<HTMLUListElement>(null);
  const handleCategory = (id: number) => {
    router.push(`/main?categoryId=${id}`);
  };

  const [categoryList, setCategoryList] = useState<CategoryDTO[]>([]);

  const [isReminder, setIsReminder] = useState<boolean>(false);
  const [mount, setMount] = useState<number>(0);

  useEffect(() => {
    getCategoryList().then((res) => setCategoryList(res.data));
  }, []);

  useEffect(() => {
    if (categoryId !== undefined) {
      GetExpenseProcessingStatusByCategory(Number(categoryId)).then((res) =>
        setExpenseProcessingStatus(res.data)
      );
    } else {
      GetAllExpenseProcessingStatus().then((res) =>
        setExpenseProcessingStatus(res.data)
      );
    }
  }, [categoryId]);

  const handleMount = (a: number, b: number) => {
    if (isReminder) {
      setMount(a / b);
      setIsReminder(!isReminder);
    } else {
      setMount((b - a) / b);
      setIsReminder(!isReminder);
    }
  };

  return (
    <>
      <div className={style.CategoryWrap}>
        <div className={style.LeftBtn}>
          <Image
            src={"/assets/images/icons/LeftBtn.svg"}
            alt={"LeftBtn"}
            width={20}
            height={20}
          />
        </div>
        <div className={style.CategoryNav}>
          <nav>
            <ul ref={targetRef}>
              {categoryList.map((item: CategoryDTO) => (
                <li
                  key={item.id}
                  className={item.id === Number(categoryId) ? style.active : ""}
                  onClick={() => handleCategory(item.id)}
                >
                  {item.categoryName}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={style.RightBtn}>
          <Image
            src={"/assets/images/icons/RightBtn.svg"}
            alt={"RightBtn"}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div
        className={style.Amount}
        onClick={() =>
          handleMount(
            expenseProcessingStatus.expenseUsed,
            expenseProcessingStatus.limitation
          )
        }
      >
        <CountUp
          start={
            !isReminder
              ? expenseProcessingStatus.limitation -
                expenseProcessingStatus.expenseUsed
              : expenseProcessingStatus.expenseUsed
          }
          end={
            isReminder
              ? expenseProcessingStatus.limitation -
                expenseProcessingStatus.expenseUsed
              : expenseProcessingStatus.expenseUsed
          }
          duration={1}
        />
        {/* <p>{isReminder ? (data.reset - data.amount).toLocaleString('ko') : data.amount.toLocaleString('ko')}</p> */}
        {/* <p className={style.reset}>{remindDay} day</p> */}
        <div className={style.progress}>
          <div
            className={style.liner}
            style={{ left: `${mount * 100}%` }}
          ></div>
          <div
            className={
              isReminder
                ? `${style.pullgr} ${style.pullgrReminder}`
                : style.pullgr
            }
            style={{ left: `${mount * 100 - 16.5}%` }}
          >
            {isReminder ? "남은금액" : "사용금액"}
          </div>
          <div
            className={
              isReminder
                ? `${style.circle} ${style.circleReminder}`
                : style.circle
            }
            style={{ left: `${mount * 100 - 6}%` }}
          >
            <Image
              src="/assets/images/icons/Back_button.svg"
              alt="back-arrow"
              width={10}
              height={8}
            />
          </div>
          <ProgressBar value={mount * 100} />
        </div>
      </div>
    </>
  );
}

export const ProgressBar = (props: { value: number }) => {
  const value = props.value;
  return <Progress color="primary" value={value} size="sm" />;
};
