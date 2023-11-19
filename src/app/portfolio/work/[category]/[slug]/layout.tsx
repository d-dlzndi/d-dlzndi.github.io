import PostHomeBtn from "./PostHomeBtn";

export default function WorkPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PostHomeBtn />
      {children}
    </>
  );
}
