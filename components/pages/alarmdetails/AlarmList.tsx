import AlarmDetailsItem from '@/components/ui/alarmdetails/AlarmDetailsItem'
import { Spacer } from '@nextui-org/react'
import React from 'react'

export default function AlarmList() {
    return (
        <>
        <Spacer y={3} />
            <AlarmDetailsItem />
            <Spacer y={0.5} />
            <AlarmDetailsItem />
            <AlarmDetailsItem />
            <AlarmDetailsItem />
        </>
    )
}
