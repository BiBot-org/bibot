import Image from "next/image";
export default function ExitButton() {
  return (
    <div>
      <Image
        width={24}
        height={17}
        src="/assets/images/icons/cancelMint.svg"
        alt="backBtn"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
