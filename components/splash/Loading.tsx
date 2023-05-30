import style from "@/styles/pages/index.module.css";
import Image from "next/image";

export const LoadingComponent = () => {
  return (
    <main className={style.mainContainer}>
      <div className={style.logo}>
        <Image
          src="assets/images/icons/companyLogo.svg"
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  );
};
