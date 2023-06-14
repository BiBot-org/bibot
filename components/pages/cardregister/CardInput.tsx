"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./CardInput.module.css";
import { Button, FormElement, Input, Spacer } from "@nextui-org/react";
import { CreateCardReq } from "@/types/card/RequestTypes";
import router from "next/router";
import { AddCard } from "@/service/card/CardService";
import Swal from "sweetalert2";

export default function CardInput() {
  const [cardInfo, setCardInfo] = useState<CreateCardReq>({} as CreateCardReq);

  const [errorMsg, setErrorMsg] = useState<{
    cardNo?: string;
    month?: string;
    year?: string;
    company?: string;
    cvc?: string;
  }>({});

  const [cardNo, setCardNo] = useState({
    cardNo1: "",
    cardNo2: "",
    cardNo3: "",
    cardNo4: "",
  });

  const [cardValid, setCardValid] = useState({
    month: "",
    year: "",
  });

  const [allcheck, setAllcheck] = useState<boolean>(false);

  const handleRegister = () => {
    if (allcheck) {
      AddCard(cardInfo).then(() => {
        Swal.fire({
          text: "카드 등록이 완료 되었습니다.",
          timer: 5000,
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          router.push("/cardusedlist");
        });
      });
    } else {
      Swal.fire({
        text: "카드 등록이 실패하였습니다.",
        timer: 5000,
        icon: "info",
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
    setCardInfo({} as CreateCardReq);
    setAllcheck(false);
  };

  const handleCardNo = (e: ChangeEvent<FormElement>) => {
    const { id, value } = e.target;
    e.target.value = e.target.value.slice(0, 4);
    if (value.match(/[^0-9]/g)) {
      e.target.value = value.replace(/[^0-9]/g, "");
      return;
    }
    if (value.length > 4) return;
    setCardNo({
      ...cardNo,
      [id]: value,
    });
  };

  const handleMonth = (e: ChangeEvent<FormElement>) => {
    const { id, value } = e.target;
    e.target.value = e.target.value.slice(0, 2);
    if (value.length > 2) return;
    if (parseInt(value) < 10) {
      setCardValid({
        ...cardValid,
        [id]: "0" + parseInt(value),
      });
    } else {
      setCardValid({
        ...cardValid,
        [id]: value,
      });
    }
  };

  const handleYear = (e: ChangeEvent<FormElement>) => {
    const { id, value } = e.target;
    e.target.value = e.target.value.slice(0, 2);
    if (value.length > 2) return;
    setCardValid({
      ...cardValid,
      [id]: value,
    });
  };

  const handleCvc = (e: ChangeEvent<FormElement>) => {
    const { id, value } = e.target;
    e.target.value = e.target.value.slice(0, 3);
    if (value.match(/[^0-9]/g)) {
      e.target.value = value.replace(/[^0-9]/g, "");
      return;
    }
    if (value.length > 3) return;
    setCardInfo({
      ...cardInfo,
      [id]: value,
    });
  };

  const handleCompany = (e: ChangeEvent<FormElement>) => {
    const { id, value } = e.target;
    if (value.match(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g)) {
      e.target.value = value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
      return;
    }
    e.target.value = e.target.value.slice(0, 15);
    setCardInfo({
      ...cardInfo,
      [id]: value,
    });
  };

  const handleALL = () => {
    if (
      cardNo.cardNo1.length < 4 ||
      cardNo.cardNo2.length < 4 ||
      cardNo.cardNo3.length < 4 ||
      cardNo.cardNo4.length < 4
    ) {
      setErrorMsg({
        cardNo: "카드번호를 확인해주세요.",
      });
    } else if (
      cardValid.month === undefined ||
      cardValid.month > "12" ||
      cardValid.month < "01"
    ) {
      setErrorMsg({
        month: "유효기간(월)을 확인해주세요.",
      });
      setAllcheck(false);
    } else if (cardValid.year === undefined || cardValid.year < "23") {
      setErrorMsg({
        year: "유효기간(년)을 확인해주세요.",
      });
      setAllcheck(false);
    } else if (cardValid.year === "23" && parseInt(cardValid.month) < 6) {
      setErrorMsg({
        month: "유효기간(월)을 확인해주세요.",
      });
      setAllcheck(false);
    } else if (cardInfo.cardCompany === undefined) {
      setErrorMsg({
        company: "카드사를 확인해주세요.",
      });
      setAllcheck(false);
    } else if (cardInfo.cardCvc === undefined || cardInfo.cardCvc.length < 3) {
      setErrorMsg({
        cvc: "CVC를 확인해주세요.",
      });
      setAllcheck(false);
    } else {
      setErrorMsg({
        cardNo: "",
        month: "",
        year: "",
        company: "",
        cvc: "",
      });
      setAllcheck(true);
      const cardNum =
        cardNo.cardNo1 +
        "-" +
        cardNo.cardNo2 +
        "-" +
        cardNo.cardNo3 +
        "-" +
        cardNo.cardNo4;
      const cardValidDate = cardValid.month + "/" + cardValid.year;
      setCardInfo({
        ...cardInfo,
        cardNo: cardNum,
        cardValid: cardValidDate,
      });
    }
    handleRegister();
  };

  return (
    <>
      <Spacer y={4} />
      <div className={style.cardRegistwrap}>
        <p className={style.subject}>카드번호 16자리</p>
        <div className={style.cardNum}>
          <Input
            underlined
            aria-label="card1"
            fullWidth={true}
            pattern="[0-9]{4}"
            onChange={(e) => handleCardNo(e)}
            id="cardNo1"
            required
          />
          <span>-</span>
          <Input.Password
            underlined
            aria-label="card2"
            hideToggle={true}
            fullWidth={true}
            pattern="[0-9]{4}"
            onChange={(e) => handleCardNo(e)}
            id="cardNo2"
            required
          />
          <span>-</span>
          <Input.Password
            underlined
            hideToggle={true}
            aria-label="card3"
            fullWidth={true}
            pattern="[0-9]{4}"
            onChange={(e) => handleCardNo(e)}
            id="cardNo3"
            required
          />
          <span>-</span>
          <Input
            underlined
            aria-label="card4"
            fullWidth={true}
            pattern="[0-9]{4}"
            onChange={(e) => handleCardNo(e)}
            id="cardNo4"
            required
          />
        </div>
        {errorMsg && <p className={style.errorMsg}>{errorMsg.cardNo}</p>}
        <Spacer y={1.5} />
        <p className={style.subject}>유효기간(월/년)</p>
        <div className={style.cardValid}>
          <Input
            underlined
            aria-label="month"
            type="number"
            fullWidth={true}
            id="month"
            onChange={(e) => handleMonth(e)}
            required
          />
          /
          <Input
            underlined
            aria-label="year"
            type="number"
            fullWidth={true}
            id="year"
            pattern="\d{2}"
            onChange={(e) => handleYear(e)}
            required
          />
        </div>
        {errorMsg.month && <p className={style.errorMsg}>{errorMsg.month}</p>}
        {errorMsg.year && <p className={style.errorMsg}>{errorMsg.year}</p>}
        <Spacer y={1.5} />
        <p className={style.subject}>카드사</p>
        <div className={style.cardCompany}>
          <Input
            underlined
            aria-label="cardCompany"
            type="text"
            fullWidth={true}
            id="cardCompany"
            pattern="^[가-힣]{1,15}$"
            onChange={(e) => handleCompany(e)}
            required
          />
        </div>
        {errorMsg.company && (
          <p className={style.errorMsg}>{errorMsg.company}</p>
        )}
        <Spacer y={1.5} />
        <p className={style.subject}>CVC(CVV)</p>
        <div className={style.cardCVC}>
          <Input.Password
            underlined
            aria-label="cardCVC"
            type="number"
            fullWidth={true}
            id="cardCvc"
            pattern="[0-9]{3}"
            onChange={(e) => handleCvc(e)}
            required
          />
        </div>
        {errorMsg && <p className={style.errorMsg}>{errorMsg.cvc}</p>}
        <Spacer y={1.5} />
        <div className={style.registBtn}>
          <Button size={"lg"} onPress={handleALL}>
            등록
          </Button>
        </div>
      </div>
    </>
  );
}
