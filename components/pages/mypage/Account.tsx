import React, { useEffect } from "react";
import { Text } from "@nextui-org/react";
import { GetUserInfo, useGetuserinfo } from "@/service/user/UserService";
import { useRecoilValue } from "recoil";
import { UserAuthInfo } from "@/types/user/types";
import { userInfoState } from "@/state/userInfo/UserInfoState";
import AccountProfile from "@/components/ui/mypage/AccountProfile";

export default function Account() {
  const userInfo = useRecoilValue<UserAuthInfo>(userInfoState);
  const { isLoading, data, isError } = useGetuserinfo(userInfo.userId);

  return (
    <>
      {!(isLoading && isError) && (
        <div>
          <Text size="$xl" css={{ color: "#40CCC3" }} weight={"bold"}>
            Account
          </Text>

          <AccountProfile
            imageUrl={data?.data.bibotUser.profileUrl || ""}
            name={`${data?.data.bibotUser.lastName} ${data?.data.bibotUser.firstName}`}
            company={`${data?.data.department.name} ${data?.data.team.name}`}
            email={data?.data.bibotUser.email || ""}
          />
        </div>
      )}
    </>
  );
}
