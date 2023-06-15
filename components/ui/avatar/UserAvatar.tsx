import { useGetUser } from "@/service/user/UserService";
import { Avatar, NormalSizes } from "@nextui-org/react";

interface Props {
  userId: string;
  size: NormalSizes;
}

export default function UserAvatar({ userId, size }: Props) {
  const { isLoading, data, isError } = useGetUser(userId);
  return (
    <>
      {" "}
      {!(isLoading || isError) && (
        <Avatar src={data.data.profileUrl} size={`${size!}`} />
      )}
    </>
  );
}
