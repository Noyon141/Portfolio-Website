"use client";

import { animatePageOut } from "@/utils/animations";
import { usePathname, useRouter } from "next/navigation";

interface TransitionProps {
  href: string;
  label: string;
  className?: string;
}
export const Transition = ({ href, label, ...props }: TransitionProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <>
      <button onClick={handleClick} {...props}>
        {label}
      </button>
    </>
  );
};
