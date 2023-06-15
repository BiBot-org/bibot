"use client";
import LoginUrlSetLayout from "@/components/layouts/LoginUrlSetLayout";
import React, { useState } from "react";
import { Button, Container, Input, Spacer } from "@nextui-org/react";
import CommonModal from "@/components/modal/CommonModal";
import {
  SendConfirmEmail,
  SendResetPasswordReq,
} from "@/service/user/UserService";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Findpassword() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isVerifyMailSended, setIsVerifyMailSended] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string>("");
  const router = useRouter();
  const sendConfirmEmail = () => {
    if (email === "") {
      Swal.fire({
        text: "이메일을 입력 해 주세요.",
        icon: "error",
      });
    }
    else {
      SendConfirmEmail(email)
        .then(() => {
          Swal.fire({
            text: "인증 번호가 이메일로 발급 되었습니다.",
            icon: "info",
          });
        })
        .then(() => setIsVerifyMailSended(true))
        .catch(() => Swal.fire({
          text: "에러가 발생했습니다.",
          icon: "error",
        })
        );
    }
  };

  const sendVerifyEmail = () => {
    if (verifyCode === "") {
      Swal.fire({
        text: "인증 번호를 입력 해 주세요.",
        icon: "error",
      });
    } else {
      SendResetPasswordReq({ email: email, verifyCode: verifyCode })
        .then(() => {
          Swal.fire({
            text: "인증 되었습니다. 임시 비밀번호가 발급 되었습니다.",
            icon: "success",
          }).then(() => {
            router.push("/login");
          });
        })
        .catch(() => {
          Swal.fire({
            text: "에러가 발생했습니다. 잠시 후 다시 시도 해 주세요.",
            icon: "error",
          });
        });
    }
  };

  return (
    <>
      <CommonModal
        isModal={isModalOpen}
        modal={setIsModalOpen}
        text="이메일로 임시비밀번호가 발급 되었습니다."
        positive
      />
      <article style={{ padding: "0 2rem" }}>
        <div style={{ color: "#B6B7B9", height: "46px" }}>
          <p style={{ fontSize: "0.8rem" }}>
            가입한 이메일 주소로 임시 비밀번호를 알려드립니다.
          </p>
          <p style={{ fontSize: "0.8rem" }}>이메일 인증을 진행 해 주세요.</p>
          <p style={{ fontSize: "0.8rem" }}>
            로그인 후 비밀번호를 꼭 변경해주세요.
          </p>
        </div>
        <Spacer y={3} />
        <Container style={{ padding: 0 }}>
          <Input
            aria-label="email"
            width="100%"
            bordered
            placeholder="Input your Email"
            required
            pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
            size="lg"
            color="primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          />
          <Spacer y={1} />
          {!isVerifyMailSended ? (
            <Button
              aria-label="issuepassword"
              auto
              color="primary"
              size="lg"
              style={{ width: "100%", backgroundColor: "#40CCC3" }}
              onPress={sendConfirmEmail}
            >
              인증번호 발급
            </Button>
          ) : (
            <>
              <Input
                aria-label="verify code"
                width="100%"
                bordered
                placeholder="Input Email Verify Code"
                type="text"
                size="lg"
                color="primary"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                style={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              />
              <Spacer y={1} />
              <Button
                aria-label="issuepassword"
                auto
                color="primary"
                size="lg"
                style={{ width: "100%", backgroundColor: "#40CCC3" }}
                onPress={sendVerifyEmail}
              >
                인증번호 입력
              </Button>
            </>
          )}
        </Container>
      </article>
    </>
  );
}

Findpassword.getLayout = function getLayout(page: React.ReactNode) {
  return <LoginUrlSetLayout title="비밀번호 찾기">{page}</LoginUrlSetLayout>;
};
