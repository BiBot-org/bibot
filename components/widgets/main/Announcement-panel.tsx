import style from "@/components/widgets/main/AnnounceMent.module.css";
import { NoticeDTO } from "@/types/notice/types";
import { getFormattedDateFromLocalDateTime } from "@/utils/dateUtils";
import Image from "next/image";
import { useRouter } from "next/router";

interface Prop {
  notice: NoticeDTO;
}

export const AnnouncementPanel = ({ notice }: Prop) => {
  const router = useRouter();
  return (
    <div
      className={style.announceWrap}
      onClick={() => router.push(`noticedetail/${notice.id}`)}
    >
      <div className={style.announceImage}>
        <Image
          src={"/assets/images/icons/robotIcon.svg"}
          alt={"robotIcon"}
          width={25}
          height={25}
        />
      </div>
      <div className={style.content}>
        <p>{notice.title}</p>
        <p className={style.txt}>{notice.content}</p>
      </div>
      <div className={style.notiTime}>
        <p>{getFormattedDateFromLocalDateTime(notice.regTime)}</p>
      </div>
    </div>
  );
};
