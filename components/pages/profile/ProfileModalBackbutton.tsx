import Image from "next/image";
export default function ProfileModalBackButton() {
  return (
    <div>
      <Image
        width={24}
        height={17}
        src="/assets/images/icons/Back_button.svg"
        alt="backBtn"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
