"use client";

import { useRouter } from "next/navigation";

export default function WorkPostBackBtn({
  className,
  children,
  push,
}: {
  className?: string;
  children?: React.ReactNode;
  push?: string;
}) {
  const router = useRouter();

  return (
    <button
      className={className}
      onClick={() => (push ? router.push(push) : router.back())}
    >
      {children}
    </button>
  );
}
