"use client";
import React, { useState } from "react";
import {
  Button,
  Container,
  FormElement,
  Input,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";
import TwoBtnModal from "@/components/modal/TwoBtnModal";

export default function UrlInput() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState<string>("");

  const onChangeSetUrl = (e: React.ChangeEvent<FormElement>) => {
    const { name, value } = e.target;
    if (name === "workspace") {
      setUrl(value);
    }
  };

  const onSubmitButton = () => {
    if (url === "") {
      alert("워크스페이스 URL을 입력 해 주세요");
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <TwoBtnModal
        isModal={isModalOpen}
        modal={setIsModalOpen}
        company={"Spharos"}
        workspaceUrl={url}
        text={"회사 이름이 맞습니까?"}
        link={"/login"}
      />
      <article>
        <Image
          src="/assets/images/bibot-pic/logoText.svg"
          alt="logo"
          width={135}
          height={46}
          priority
        />
        <Spacer y={3} />
        <Container style={{ padding: 0 }}>
          <Input
            aria-label="url"
            bordered
            width="100%"
            size="lg"
            placeholder="ex) bibot.com/spharos/tech"
            value={url}
            onChange={onChangeSetUrl}
            required
            name="workspace"
            color="primary"
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          />
          <Spacer y={1} />
          <Button
            auto
            aria-label="urlConfirm"
            color="primary"
            type="submit"
            size="lg"
            onPress={onSubmitButton}
            style={{
              width: "100%",
              backgroundColor: "#40CCC3",
              color: "#fff",
              textAlign: "center",
            }}
          >
            확인
          </Button>
        </Container>
      </article>
    </>
  );
}
