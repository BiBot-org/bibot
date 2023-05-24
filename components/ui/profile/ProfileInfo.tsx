import React from 'react'
import style from '@/components/ui/profile/ProfileInfo.module.css'

export default function ProfileInfo(props:{title:string, content:string}) {
    return (
        <div className={style.profileInfo}>
            <div className={style.profileInfoTitle}>{props.title}</div>
            <div className={style.profileInfoContent}>{props.content}</div>
        </div>
    )
}
