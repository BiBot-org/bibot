import React from 'react'
import style from '@/components/ui/Title.module.css'

export default function Title(props: { title: string, size: number }) {
    return (
        <div className={style.title} style={{ fontSize: props.size}}>{props.title}</div>
    )
}
