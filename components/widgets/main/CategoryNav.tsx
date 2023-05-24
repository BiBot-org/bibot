import React, { useEffect, useRef, useState } from 'react'
import style from '@/components/widgets/main/CategoryNav.module.css'
import Image from 'next/image'
import { mainCategoryType } from '@/types/main/mainTypes'
import dynamic from 'next/dynamic';
import { Progress } from '@nextui-org/react'
import { useRouter } from 'next/router';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export interface reminderType {
    id: number,
    amount: number,
    reset: number,
    resetDay: string,
    resetTime: number,
}

export default function CategoryNav(props: { categoryData: mainCategoryType[] }) {

    const categoryData = props.categoryData
    const router = useRouter()
    const {categoryId} = router.query
    const targetRef = useRef<HTMLUListElement>(null);
    const handleCategory = (id: number) => {
        router.push(`/main?categoryId=${id}`)
    }

    const dataList = [
        {   
            id: 1,
            amount: 356500,
            reset: 1000000,
            resetDay: '2023-05-31',
            resetTime: 24,
        },
        {   
            id: 2,
            amount: 126500,
            reset: 200000,
            resetDay: '2023-05-31',
            resetTime: 24,
        },
        {   
            id: 3,
            amount: 756500,
            reset: 1000000,
            resetDay: '2023-05-31',
            resetTime: 24,
        },
        {   
            id: 4,
            amount: 26500,
            reset: 300000,
            resetDay: '2023-05-31',
            resetTime: 24,
        },
        {   
            id: 5,
            amount: 356500,
            reset: 1000000,
            resetDay: '2023-05-31',
            resetTime: 24,
        }
    ]

    const [today, setToday] = useState<Date>()
    const [remindDay, setRemindDay] = useState<number>(0)
    const [isReminder, setIsReminder] = useState<boolean>(false)
    const [mount, setMount] = useState<number>(0)
    const [data, setData] = useState<reminderType>(dataList[0])

    useEffect(() => {
        const today = new Date()
        setToday(today)
        // fetch
        const data:reminderType = dataList.find((item) => item.id === Number(categoryId)) as reminderType;
        // const daysRemind = new Date(data.resetDay).getTime() - today.getTime()
        // setRemindDay(Math.round(daysRemind/1000/60/60/24))
        if(data) {
            setMount(data.amount/data.reset)
            setData(data)
        }
    }, [categoryId])

    const handleMount = (a:number, b:number) => {
        if(isReminder) {
            setMount(a/b)
            setIsReminder(!isReminder)
        } else {
            setMount((b-a)/b)
            setIsReminder(!isReminder)
        }
    }

    return (
        <>
            <div className={style.CategoryWrap}>
                <div className={style.LeftBtn}>
                    <Image src={'/assets/images/icons/LeftBtn.svg'} alt={'LeftBtn'} width={20} height={20} />
                </div>
                <div className={style.CategoryNav}>
                    <nav>
                        <ul ref={targetRef}>
                            {
                                categoryData.map((item:mainCategoryType) => (
                                    <li 
                                    key={item.id} 
                                    className={item.id === Number(categoryId) ? style.active : ''}
                                    onClick={() => handleCategory(item.id)}
                                    >{item.name}</li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className={style.RightBtn}>
                    <Image src={'/assets/images/icons/RightBtn.svg'} alt={'RightBtn'} width={20} height={20} />
                </div>
            </div >
            <div className={style.Amount} onClick={()=>handleMount(data.amount, data.reset)}>
                <CountUp
                    start={!isReminder ? (data.reset - data.amount) : data.amount}
                    end={isReminder ? (data.reset - data.amount) : data.amount}
                    duration={1}
                />
                {/* <p>{isReminder ? (data.reset - data.amount).toLocaleString('ko') : data.amount.toLocaleString('ko')}</p> */}
                {/* <p className={style.reset}>{remindDay} day</p> */}
                <div className={style.progress}>
                    <div className={style.liner} style={{left: `${(mount * 100)}%`}}></div>
                    <div className={isReminder ? `${style.pullgr} ${style.pullgrReminder}` : style.pullgr} style={{left: `${(mount * 100)-16.5}%`}}>{isReminder ? '남은금액' : '사용금액'}</div>
                    <div className={isReminder ? `${style.circle} ${style.circleReminder}` : style.circle} style={{left: `${(mount * 100)-6}%`}}>
                        <Image src='/assets/images/icons/Back_button.svg' alt='back-arrow' width={10} height={8}/>
                    </div>
                    <ProgressBar value={mount * 100}/>
                </div>
            </div>
        </>
    )
}

export const ProgressBar = (props:{value:number}) => {

    const value = props.value
    return (
        <Progress color="primary" value={value} size='sm'/>
    );
  }