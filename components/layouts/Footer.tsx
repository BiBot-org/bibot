import React from 'react'
import { footerMenu } from '@/datas/footerMenuData'
import { footerMenuType } from '@/types/footer/footerTypes'
import style from '@/components/layouts/Footer.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Footer() {
  return (
    <footer className={style.defaultFooter}>
      <div className={style.footerBtnWrap}>
        {
          footerMenu && footerMenu.map((item: footerMenuType) => {
            return (
              <FooterButton key={item.id} item={item} />
            )
          })
        }
      </div>
    </footer>
  )
}

const FooterButton = ({ item }: { item: footerMenuType }) => {

  const router = useRouter()
  const handleButton = () => {
    console.log('handleButton')
    if(item.link)router.push(item.link)
  }
  return (
    <div className={item.link === router.pathname ? `${style.footerBtn} ${style.active}` : style.footerBtn} onClick={handleButton}>
      <Image src={item.iconImgUrl} width={25} height={25} priority={true} alt={item.name} />
    </div>
  )
}
