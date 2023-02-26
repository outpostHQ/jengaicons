import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { CPColumn, CPText } from "@/components/shared/library";
import { Block } from "@cube-dev/ui-kit";
import { Inter } from "@next/font/google";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const heroContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: heroContainerRef,
  });

  console.log(scrollYProgress);

  return (
    <CPColumn>
      <Banner />
      <Hero />
      <Main />
    </CPColumn>
  );
}
