"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LaptopMinimal, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <main className="max-w-full h-full mx-4 sm:mx-6 md:mx-8 xl:mx-12 flex flex-col justify-center ">
      <motion.div
        className="px-4 sm:px-6 md:px-8 xl:px-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:gap-x-4 md:gap-x-6 xl:gap-x-10 w-full flex-1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 100,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <div className="w-full ">
          <img
            src="/portfolio.png"
            alt="Portfolio Image"
            className="rounded-md  after:rounded-md object-cover "
          />
        </div>
        <div className="w-full flex flex-col space-y-6  justify-center">
          <p className="text-center text-lg md:text-xl font-light tracking-wide">
            Hi there, my name is{" "}
            <motion.span
              initial={{ opacity: 0, color: "black" }}
              animate={{ opacity: 100, color: "white" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="font-semibold"
            >
              Mofijur Rahman
            </motion.span>
            . As a web developer with 1 year of hands-on experience I have honed
            my skill in crafting premium web application with{" "}
            <motion.span
              initial={{ opacity: 0, color: "black" }}
              animate={{ opacity: 100, color: "white" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="font-semibold"
            >
              NextJS & various modern packages
            </motion.span>
            , therefore you could have a advanced, up to date & highly secured
            polished web experience.
          </p>
          <div className="font-semibold text-lg flex gap-6 items-center justify-center">
            <Button
              className="flex items-center justify-between px-2 gap-2"
              size={"lg"}
              onClick={() => router.push("/blog")}
            >
              <LaptopMinimal size={20} />
              View My Work
            </Button>
            <Button
              variant={"ghost"}
              className="flex items-center justify-between px-2 gap-2"
              onClick={() => router.push("/contact")}
            >
              <Mail size={20} />
              Contact Me
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Home;
