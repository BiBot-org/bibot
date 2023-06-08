"use client";
import { Spacer, Container, Input, Button, Row } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getSession, signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/state/userInfo/UserInfoState";

export default function LoginInput() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("유효한 이메일을 입력 하셔야 합니다.")
        .max(255)
        .required("이메일을 입력 해 주세요."),
      password: Yup.string().max(255).required("비밀번호를 입력 해 주세요."),
    }),
    onSubmit: async (values) => {
      const result = await signIn("keycloak", {
        username: values.email,
        password: values.password,
        callbackUrl: "/main?categoryId=1",
      });
      console.log(result);
      if (result?.error) {
        Swal.fire({
          text: "아이디와 비밀번호를 확인 해 주세요",
          icon: "error",
        });
      } else {
        const session = await getSession();
        console.log(session);

        Swal.fire({
          text: `환영합니다.${session}`,
          icon: "success",
        });
      }
    },
  });

  return (
    <article>
      <Image
        src="assets/images/bibot-pic/logoText.svg"
        alt="logo"
        width={135}
        height={46}
        priority
      />
      <Spacer y={3} />
      <Container style={{ padding: 0 }}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Input
            aria-label="email"
            name="email"
            width="100%"
            bordered
            size="lg"
            placeholder="Input your Email"
            color="primary"
            style={{ fontSize: "0.8rem", fontWeight: "bold" }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Spacer y={1} />
          <Input.Password
            aria-label="password"
            name="password"
            width="100%"
            bordered
            size="lg"
            placeholder="Input your password"
            color="primary"
            type="password"
            style={{ fontSize: "0.8rem", fontWeight: "bold" }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Spacer y={1} />
          <Button
            aria-label="login"
            size="lg"
            type="submit"
            style={{ width: "100%", backgroundColor: "#40CCC3" }}
          >
            로그인
          </Button>
        </form>
        <Spacer y={1} />
        <Row justify="center">
          <Button
            size="lg"
            onPress={() => router.push("/findpassword")}
            style={{ width: "100%", backgroundColor: "#40CCC3" }}
          >
            비밀번호 찾기
          </Button>
        </Row>
      </Container>
    </article>
  );
}
