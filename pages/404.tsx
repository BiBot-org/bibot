import Error404 from "@/components/error/Error404";
import style from "@/styles/pages/index.module.css";

export default function ErrorNotfoundPage() {
  return (
    <div className={style.mainContainer}>
      <Error404 />
    </div>
  );
}
