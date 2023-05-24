import React from 'react'
import { Button, Container, Input, Row, Spacer } from '@nextui-org/react'
import Image from 'next/image'

export default function UrlInput() {
  return (
    <article>
      <Image src="/assets/images/bibot-pic/logoText.svg" alt="logo" width={135} height={46} priority />
      <Spacer y={3} />
      <Container style={{padding:0}}>
          <Input
            // rounded
            bordered
            width="100%"
            size='lg'
            placeholder="bobot.com/spharos/tech"
            color="primary"
            style={{textAlign:'center', fontSize:'0.8rem', fontWeight:'bold'}}
          />
          <Spacer y={1} />
          <Button 
            auto
            color="primary"
            size='lg'
            // rounded
            style={{width:'100%', backgroundColor:'#40CCC3', color:'#fff', textAlign:'center'}}
          >
            확인
            </Button>
      
      </Container>
    </article>
  )
}
