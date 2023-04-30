import React from 'react'
import style from '@/components/layouts/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={style.defaultFooter}>
      <div className={style.FooterButtonWrap}>
        <div className={style.leftButton}>
          <Image src="/assets/images/icons/homeIcon.svg" width={25} height={25} priority={true} alt={'homeIcon'} />
        </div>
        <div className={style.centerButton}>
          <Image src="/assets/images/icons/robotIcon.svg" width={25} height={25} priority={true} alt={'robotIcon'} />
        </div>
        <div className={style.rightButton}>
          <Image src="/assets/images/icons/mypageIcon.svg" width={25} height={25} priority={true} alt={'mypageIcon'} />
        </div>
      </div>
    </footer>
  )
}
