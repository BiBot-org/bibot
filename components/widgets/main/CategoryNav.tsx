import React from 'react'
import style from '@/components/widgets/main/CategoryNav.module.css'
import { mainCategoryData } from '@/datas/mainCategoryData'
import Image from 'next/image'

export default function CategoryNav() {
    return (
        <>
            <div className={style.CategoryWrap}>
                <div className={style.LeftBtn}>
                    <Image src={'/assets/images/icons/LeftBtn.svg'} alt={'LeftBtn'} width={20} height={20} />
                </div>
                <div className={style.CategoryNav}>
                    <nav>
                        <ul>
                            {
                                mainCategoryData.map(item => (
                                    <li key={item.id}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className={style.RightBtn}>
                    <Image src={'/assets/images/icons/RightBtn.svg'} alt={'RightBtn'} width={20} height={20} />
                </div>
            </div >
            <div className={style.Amount}>
                <div className={style.pullgr}>사용금액</div>
                <p>789,500</p>
                <progress value={789500} max={1000000} > </progress>
            </div>

        </>
    )
}
