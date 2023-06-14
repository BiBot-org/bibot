"use client";
import { ChangePassword } from "@/service/auth/AuthService";
import { useGetMyInfo } from "@/service/user/UserService";
import { Input, Spacer, Button, FormElement } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React, { ChangeEvent, useState } from "react";

import Swal from "sweetalert2";

interface changePassword {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

export default function ChangePwdInput() {
  const { isLoading, data, isError } = useGetMyInfo();

  const [changePassword, setChangePassword] = useState<changePassword>({
    password: "",
    newPassword: "",
    newPasswordCheck: "",
  });
  const onChangePassword = (e: ChangeEvent<FormElement>) => {
    const { name, value } = e.target;
    setChangePassword({
      ...changePassword,
      [name]: value,
    });
  };

  const onClickSubmitChangePassword = () => {
    if (changePassword.newPassword !== changePassword.newPasswordCheck) {
      Swal.fire({
        text: "비밀번호를 확인 해 주세요.",
        icon: "error",
      });
    } else {
      ChangePassword(
        data?.data.bibotUser.email!,
        changePassword.password,
        changePassword.newPassword
      )
        .then(() =>
          Swal.fire({
            text: "성공적으로 변경 되었습니다.",
            icon: "success",
          }).then(() => {
            signOut();
          })
        )
        .catch(() => {
          Swal.fire({
            text: "에러가 발생하였습니다.",
            icon: "error",
          });
        });
    }
  };

  return (
    <>
      {!(isLoading || isError) && (
        <article>
          <Spacer y={3} />
          <Input.Password
            bordered
            aria-label="nowpassword"
            placeholder="Input your password"
            name="password"
            type="password"
            value={changePassword.password}
            onChange={onChangePassword}
            width="100%"
            size="lg"
          />
          <Spacer y={1.5} />
          <Input.Password
            bordered
            aria-label="newpassword"
            placeholder="Input your password"
            name="newPassword"
            type="password"
            value={changePassword.newPassword}
            onChange={onChangePassword}
            width="100%"
            size="lg"
          />
          <Spacer y={1.5} />
          <Input.Password
            bordered
            aria-label="newpasswordcheck"
            name="newPasswordCheck"
            placeholder="Input your password again"
            type="password"
            value={changePassword.newPasswordCheck}
            onChange={onChangePassword}
            width="100%"
            size="lg"
          />
          <Spacer y={3} />
          <Button
            size="lg"
            style={{ width: "100%", backgroundColor: "var(--bibot-primary)" }}
            onClick={onClickSubmitChangePassword}
          >
            비밀번호 변경
          </Button>
        </article>
      )}
    </>
  );
}
