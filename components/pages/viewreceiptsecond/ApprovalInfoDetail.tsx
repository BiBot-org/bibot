import { useGetUser } from "@/service/user/UserService";
import { Avatar, Grid, Input, Spacer } from "@nextui-org/react";

interface Props {
  userId: string;
}

export default function ApprovalInfoDetail({ userId }: Props) {
  const { isLoading, data, isError } = useGetUser(userId);

  return (
    <>
      {!(isLoading || isError) && (
        <>
          <Spacer y={2} />
          <Grid.Container gap={1}>
            <Grid xs={2}>
              <Avatar src={data.data.profileUrl} size="md" />
            </Grid>
            <Grid xs={8}>
              <Input
                readOnly
                labelPlaceholder="결재 담당자"
                value={`${data.data.lastName} ${data.data.firstName}`}
              />
            </Grid>
          </Grid.Container>
        </>
      )}
    </>
  );
}
