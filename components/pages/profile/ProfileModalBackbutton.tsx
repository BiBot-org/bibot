import style from "./ProfileInfoList.module.css";
import Image from "next/image";
export default function ProfileModalBackButton() {
  return (
    <div>
      <Image
        className={style.backBtn}
        width={24}
        height={17}
        src="/assets/images/icons/Back_button.svg"
        alt="backBtn"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
