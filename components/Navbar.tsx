"use client";

import cn from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "./transitions";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const pathname = usePathname();
  const routes = [
    {
      href: "/about",
      label: "About Me",
      isActive: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      isActive: pathname === "/contact",
    },
    {
      href: "/blog",
      label: "Blog",
      isActive: pathname === "/blog",
    },
  ];

  return (
    <>
      <div className=" px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-24 ">
        <div className="flex items-center gap-x-4 justify-between">
          <Link href={"/"} className=" rounded-lg font-semibold">
            <p className="lg:text-xl text-slate-200 text-lg flex flex-col sm:inline-block items-center">
              Mofijur{" "}
              <span className="bg-slate-200 text-black px-1 rounded-md">
                Rahman
              </span>
            </p>
          </Link>
          <div className="flex items-center space-x-4">
            {routes.map((route) => (
              <div key={route.href} className="">
                <Transition
                  href={route.href}
                  label={route.label}
                  className={cn(
                    " hover:text-white transition-colors duration-200 ease-in-out font-medium text-lg",
                    route.isActive ? "text-white" : "text-gray-300/70"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
