import React, { useState } from 'react'
import Image from 'next/image'
import style from './CardImage.module.css'

export default function CardImage(props: { name: string, cardNumber: string, valid: string }) {


    return (
        <>
            <div className={style.cardImageWrap}>
                <div className={style.cardImage}>
                    <Image
                        src='/assets/images/icons/registedcard.svg'
                        alt='registered-card'
                        width={327}
                        height={200}
                    />
                </div>
                <div className={style.cardInfo}>
                    <p>{props.name}</p>
                    <p>{props.cardNumber}</p>
                    <p>{props.valid}</p>
                </div>
            </div>
        </>
    )
}