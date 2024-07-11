"use client";

import { animatePageIn } from "@/utils/animations";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        className="min-h-screen bg-slate-200 fixed top-0 left-0 w-1/4  z-50"
        id="banner-1"
      />
      <div
        className="min-h-screen bg-slate-200 fixed top-0 left-1/4 w-1/4 z-50"
        id="banner-2"
      />
      <div
        className="min-h-screen bg-slate-200 fixed top-0 left-2/4 w-1/4 z-50"
        id="banner-3"
      />
      <div
        className="min-h-screen bg-slate-200 fixed top-0 left-3/4 w-1/4 z-50"
        id="banner-4"
      />
      {children}
    </div>
  );
};

export default Template;
