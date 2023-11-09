import WorkPage from "@/components/page/WorkPage";

export default function WorkList({ params }: { params: { category: string } }) {
  return <WorkPage params={params} />;
}
