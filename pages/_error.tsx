import ErrorPageComponent from "@/components/error/ErrorPageComponent";
import style from "@/styles/pages/index.module.css";

export default function ErrorPage() {
  return (
    <div className={style.mainContainer}>
      <ErrorPageComponent />
    </div>
  );
}
