import React from 'react'

export default function AlarmDetailsItem() {

  const isRead = true

  const style = {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'solid 1px #9d9dae',
    backgroundColor: '#d6d0d0',
    height : '5rem'
  }

  return (
    <>
      <div style={isRead ? style : {}}>
        <div>
          <p>결재가 완료 되었습니다.</p>
          <p>2023-04-25</p>
        </div>
      </div>
    </>
  )
}
