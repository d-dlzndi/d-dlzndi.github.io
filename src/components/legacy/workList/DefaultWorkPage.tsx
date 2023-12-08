import ScreenWorkList from "@/components/legacy/workList/ScreenWorkList";

export default function DefaultWorkPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className=" w-full p-10 pt-[30vh]">
      <h1 className=" text-5xl lg:text-7xl mb-10">WORK</h1>
      <ScreenWorkList />
    </div>
  );
}
