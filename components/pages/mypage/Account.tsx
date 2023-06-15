import React from "react";
import { Text } from "@nextui-org/react";
import { useGetMyInfo } from "@/service/user/UserService";
import AccountProfile from "@/components/ui/mypage/AccountProfile";

export default function Account() {
  const { isLoading, data, isError } = useGetMyInfo();

  return (
    <>
      {!(isLoading || isError) && (
        <div>
          <Text size="$xl" css={{ color: "#40CCC3" }} weight={"bold"}>
            Account
          </Text>

          <AccountProfile
            imageUrl={`${data?.data.bibotUser.profileUrl}`}
            name={`${data?.data.bibotUser.lastName} ${data?.data.bibotUser.firstName}`}
            company={`${data?.data.department.name} ${data?.data.team.name}`}
            email={`${data?.data.bibotUser.email}`}
          />
        </div>
      )}
    </>
  );
}
