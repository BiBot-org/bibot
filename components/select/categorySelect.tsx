import { useGetCategoryList } from "@/service/category/CategoryService";

export default function CategorySelectBox() {
  const { isLoading, data } = useGetCategoryList();

  return (
    <>
      <option>카테고리를 선택해주세요.</option>
      {!isLoading &&
        data?.data.map((categoryDTO) => (
          <option key={`select ${categoryDTO.id}`} value={categoryDTO.id}>
            {categoryDTO.categoryName}
          </option>
        ))}
    </>
  );
}
