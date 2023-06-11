import style from "@/components/widgets/Approval.module.css";
import { useGetCategoryById } from "@/service/category/CategoryService";

interface Prop {
  categoryId: number;

  backgroundColor: String;
}

export default function ApprovalCategoryLogo({
  categoryId,
  backgroundColor,
}: Prop) {
  const { isLoading, data } = useGetCategoryById(categoryId);

  return (
    <>
      {!isLoading && (
        <div
          className={style.ContentImage}
          style={{
            backgroundColor: `${backgroundColor}`,
          }}
        >
          <p>{data?.data.categoryName}</p>
        </div>
      )}
    </>
  );
}
