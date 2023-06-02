import React, { ChangeEvent, useEffect, useState } from 'react'
import style from "./CardInput.module.css";
import { Button, FormElement, Input, Spacer } from '@nextui-org/react';
import { CreateCardReq } from '@/types/card/RequestTypes';
import router from 'next/router';
import { AddCard } from '@/service/card/CardService';

export default function CardInput() {
    const [cardInfo, setCardInfo] = useState<CreateCardReq>(
        {} as CreateCardReq);

    const [cardNo, setCardNo] = useState({
        cardNo1: '',
        cardNo2: '',
        cardNo3: '',
        cardNo4: ''
    });

    const [cardValid, setCardValid] = useState({
        month: '',
        year: ''
    });

    const cardNoRegex = /^\d{4}$/;
    const cardValidMonthRegex = /^(0[1-9]|1[0-2])$/;
    const cardValidYearRegex = /^\d{2}$/;
    const cardCompanyRegex = /^[A-Za-z]{1,30}$/;
    const cardCvcRegex = /^\d{3}$/;

    useEffect(() => {
        if (cardInfo.cardNo && cardInfo.cardValid && cardInfo.cardCompany && cardInfo.cardCvc) {
            // AddCard(cardInfo).then(() => router.push('/cardusedlist'));
            console.log(cardInfo);
            // setCardInfo({} as CreateCardReq);
        }
    }, [cardInfo]);

    const handleCardNo = (e: ChangeEvent<FormElement>) => {
        const { id, value } = e.target;
        e.target.value = e.target.value.slice(0, 4);

        setCardNo({
            ...cardNo,
            [id]: value
        });
        console.log(cardNo);
    }

    const handleValid = (e: ChangeEvent<FormElement>) => {
        const { id, value } = e.target;
        e.target.value = e.target.value.slice(0, 2);
        setCardValid({
            ...cardValid,
            [id]: value
        });
        console.log(cardValid);
    }

    const handleChange = (e: ChangeEvent<FormElement>) => {
        const { id, value } = e.target;
        if (id === 'cardCvc') {
            e.target.value = e.target.value.slice(0, 3);
            setCardInfo({
                ...cardInfo,
                [id]: value,
            });
        }
        else if (id === 'cardCompany') {
            setCardInfo({
                ...cardInfo,
                [id]: value,
            });
        }
        console.log(cardInfo);
    }

    const handleALL = () => {
        const cardNum = cardNo.cardNo1 + '-' + cardNo.cardNo2 + '-' + cardNo.cardNo3 + '-' + cardNo.cardNo4;
        const cardValidDate = cardValid.month + '/' + cardValid.year;
        setCardInfo({
            ...cardInfo,
            cardNo: cardNum,
            cardValid: cardValidDate,
        });
    }

    return (
        <>
            <Spacer y={4} />
            <div className={style.cardRegistwrap}>
                <p>카드번호 16자리</p>
                <div className={style.cardNum}>
                    <Input
                        underlined
                        color='primary'
                        aria-label='card1'
                        type='number'
                        fullWidth={true}
                        pattern='[0-9]{4}'
                        onChange={(e) => handleCardNo(e)}
                        id='cardNo1'
                        required
                    /><span>-</span>
                    <Input.Password
                        underlined
                        hideToggle={true}
                        aria-label='card2'
                        fullWidth={true}
                        pattern='[0-9]{4}'
                        onChange={(e) => handleCardNo(e)}
                        id='cardNo2'
                        required
                    /><span>-</span>
                    <Input.Password
                        underlined
                        hideToggle={true}
                        aria-label='card3'
                        fullWidth={true}
                        pattern='[0-9]{4}'
                        onChange={(e) => handleCardNo(e)}
                        id='cardNo3'
                        required
                    /><span>-</span>
                    <Input
                        underlined
                        aria-label='card4'
                        type='number'
                        fullWidth={true}
                        pattern='[0-9]{4}'
                        onChange={(e) => handleCardNo(e)}
                        id='cardNo4'
                        required
                    />
                </div>
                <Spacer y={1.5} />
                <p>유효기간(월/년)</p>
                <div className={style.cardValid}>
                    <Input
                        underlined
                        aria-label='month'
                        type='number'
                        fullWidth={true}
                        id='month'
                        pattern="0[1-9]|1[0-2]"
                        onChange={(e) => handleValid(e)}
                        required
                    />/
                    <Input
                        underlined
                        aria-label='year'
                        type='number'
                        fullWidth={true}
                        id='year'
                        pattern="\d{2}"
                        onChange={(e) => handleValid(e)}
                        required
                    />
                </div>
                <Spacer y={1.5} />
                <p>카드사</p>
                <div className={style.cardCompany}>
                    <Input
                        underlined
                        aria-label='cardCompany'
                        type='text'
                        fullWidth={true}
                        id='cardCompany'
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <Spacer y={1.5} />
                <p>CVC(CVV)</p>
                <div className={style.cardCVC}>
                    <Input.Password
                        underlined
                        aria-label='cardCVC'
                        type='password'
                        fullWidth={true}
                        id='cardCvc'
                        pattern="\d{3}"
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <Spacer y={1.5} />
                <div className={style.registBtn}>
                    <Button
                        size={'lg'}
                        onPress={handleALL}
                    >
                        등록
                    </Button>
                </div>
            </div>
        </>
    )
}
