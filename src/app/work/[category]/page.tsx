import WorkPage from "@/components/page/WorkPage";
import { getAllCategories } from "@/utils/post_api";

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((ct) => ({
    category: encodeURI(ct),
  }));
}

export default function WorkCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return <WorkPage params={params} />;
}
