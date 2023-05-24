import React from 'react'

export default function Separator(props: { gutter? : number}) {
    return (
        <div style={{marginTop: `${props.gutter}rem`}}></div>
    )
}
