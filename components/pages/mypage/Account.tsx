import React, { useEffect } from "react";
import { Text } from "@nextui-org/react";
import { GetUserInfo } from "@/service/user/UserService";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { BibotUserInfo } from "@/types/user/types";
import { userInfoState } from "@/state/userInfo/UserInfoState";
import AccountProfile from "@/components/ui/mypage/AccountProfile";

export default function Account() {
  const [userInfo, setUserInfo] = useRecoilState<BibotUserInfo>(userInfoState);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      GetUserInfo(session.tokenInfo.id).then((res) => setUserInfo(res.data));
    }
  }, [session, setUserInfo]);

  return (
    <div>
      <Text size="$xl" css={{ color: "#40CCC3" }} weight={"bold"}>
        Account
      </Text>
      {userInfo && session && (
        <AccountProfile
          imageUrl={userInfo.bibotUser.profileUrl}
          name={`${userInfo.bibotUser.lastName} ${userInfo.bibotUser.firstName}`}
          company={`${userInfo.department.name} ${userInfo.team.name}`}
          email={userInfo.bibotUser.email}
        />
      )}
    </div>
  );
}
