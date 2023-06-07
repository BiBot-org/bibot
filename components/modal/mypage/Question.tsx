import { Collapse, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'

export default function Question(props: { ismodalopen: boolean, modal: React.Dispatch<React.SetStateAction<boolean>> }) {
    if (!props.ismodalopen) return null;
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                backgroundColor: 'white',
            }}
        >
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '70px' }}>
                <div></div>
                <h4 style={{ textAlign: 'center', color: 'var(--bibot-primary)', margin: '0' }}>도움말</h4>
                <Image
                    src="/assets/images/icons/cancelMint.svg"
                    alt="cancelIcon"
                    width={20}
                    height={20}
                    onClick={() => props.modal(!props.ismodalopen)}
                />
            </header>
            <Spacer y={1} />
            <main>
                <Collapse.Group>
                    <Collapse
                        title={<Text h5>비밀번호를 잊어버렸어요</Text>}
                    >
                        <Text>
                            비밀번호 찾기는 [로그인&#62;비밀번호 찾기] 에서 가능합니다.
                        </Text>
                    </Collapse>
                    <Collapse
                        title={<Text h5>영수증 첨부가 안돼요</Text>}
                    >
                        <Text>
                            영수증 첨부가 안될 시 확인하는 방법은 두가지가 있어요.<br/>
                            1. 영수증이 인증화면에 제대로 들어가는지 확인<br/>
                            2. 손상된 영수증인지 확인
                        </Text>
                    </Collapse>
                    <Collapse
                        title={<Text h5>영수증 작성은 어떻게 하나요?</Text>}
                    >
                        <Text>
                            영수증 작성은 [카드사용내역&#62;사용내역&#62;영수증 등록] 에서
                            가능합니다.
                        </Text>
                    </Collapse>
                    <Collapse
                        title={<Text h5>이메일 인증이 안와요</Text>}
                    >
                        <Text>
                            알림 설정을 확인해주세요 [마이페이지&#62;환경설정&#62;알림] 에서
                            가능합니다.
                        </Text>
                    </Collapse>
                    <Collapse
                        title={<Text h5>점검시간이 끝났는데도 접속이 안돼요</Text>}
                    >
                        <Text>
                            죄송합니다 고객님.
                            <br />
                            시간을 준수하려고 노력하고 있지만 가끔 서버 오류로 인해 접속이
                            안되는 경우가 있습니다.
                            <br />
                            어플을 종료하고 다시 접속 부탁드립니다.
                        </Text>
                    </Collapse>
                    <Collapse
                        title={<Text h5>카드등록이 안돼요</Text>}
                    >
                        <Text>
                            카드정보를 정확히 입력해주세요
                        </Text>
                    </Collapse>
                    <Collapse
                        title={<Text h5>영수증이 없는 경우 결재처리가 안되나요?</Text>}
                    >
                        <Text>
                            네 실물영수증이 있어야 결재처리가 가능합니다.
                            <br />
                            불편을 드려서 죄송합니다.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </main>
        </div>
    )
}
