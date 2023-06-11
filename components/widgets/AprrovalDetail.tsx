import React, { useState } from "react";
import style from "@/components/widgets/Approval.module.css";
import Image from "next/image";
import { ApprovalDTO, SearchApproval } from "@/types/expense/types";
import { Collapse, Grid, Text } from "@nextui-org/react";
import ApprovalCategoryLogo from "./ApprovalCategoryLogo";
import { getFormattedDateTimeFromLocalDateTime } from "@/utils/dateUtils";
import {
  approvalStatusBC,
  approvalStatus,
} from "@/datas/approval/approvalItem";
interface Prop {
  approval: SearchApproval;
}

export default function ApprovalDetail({ approval }: Prop) {
  const itemStyle = {
    backgroundColor:
      approvalStatusBC[approval.status] || "var(--bibot-primary)",
  };

  return (
    <div className={style.modalContent}>
      <ApprovalCategoryLogo
        categoryId={approval.categoryId}
        backgroundColor={itemStyle.backgroundColor}
      />
      <div className={style.ContentInfo}>
        <div className={style.Contentitle}>
          <div className={style.contentmenu}></div>
          <Grid.Container gap={1}>
            <Grid>
              <Text h4>
                {getFormattedDateTimeFromLocalDateTime(approval.regTime)}
              </Text>
              <div className={style.ContentPrice} style={itemStyle}>
                <p>{approvalStatus[approval.status]}</p>
              </div>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
