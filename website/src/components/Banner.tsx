import { Block } from "@cube-dev/ui-kit";
import { Sun } from "@jengaicons/react";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import BannerIcon from "./BannerIcon";
import { CPColumn, CPRow, CPText } from "./shared/library";
import { motion } from "framer-motion";
function Banner() {
  const bannerRef = useRef(null);
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    container: bannerRef,
  });
  const transform = useTransform(scrollYProgress, [0, 1], [0, 1200]);

  return (
    <Block
      padding={["60px 0 0 0", "40px"]}
      styles={{
        height: ["70vh", "650px"],
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Block
        fill="var(--cp-surface-primary)"
        radius="2rem"
        styles={{
          position: "absolute",
          left: "50%",
          height: ["208px", "158px"],
          width: ["208px", "158px"],
          translate: "-50% 0",
          textAlign: "center",
          zIndex: "10000",
          display: "flex",
          flow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CPText
          styles={{
            fontSize: ["60px", "2.5rem"],
            fontWeight: "700",
            lineHeight: ["66px", "3rem"],
          }}
        >
          Jenga
        </CPText>
        <CPText
          styles={{
            fontSize: ["60px", "2.5rem"],
            fontWeight: "700",
            lineHeight: ["66px", "3rem"],
          }}
        >
          Icons
        </CPText>
      </Block>
      <Block
        styles={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "70px",
          background:
            "linear-gradient(180deg, rgba(18, 19, 18, 0) 0%, rgba(18, 19, 18, 0.94) 65.94%)",
          zIndex: "100",
        }}
      ></Block>
      <Block
        styles={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "200px",
          background:
            "linear-gradient(180deg, rgba(18, 19, 18, 0) 0%, rgba(18, 19, 18, 0.94) 60.94%)",
          zIndex: "100",
          transform: "rotate(180deg)",
        }}
      ></Block>
      <motion.div
        style={{
          translateY: transform,
        }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <CPRow gap="50px" justifyContent="center">
          <CPColumn gap="50px">
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
          <CPColumn gap="50px" style={{ position: "relative", top: "80px" }}>
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
          <CPColumn gap="50px" style={{ position: "relative", top: "160px" }}>
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
          <CPColumn gap="50px" style={{ position: "relative", top: "240px" }}>
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
          <CPColumn gap="50px" style={{ position: "relative", top: "240px" }}>
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
          <CPColumn gap="50px" style={{ position: "relative", top: "160px" }}>
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
          <CPColumn gap="50px" style={{ position: "relative", top: "80px" }}>
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
          <CPColumn gap="50px">
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
            <BannerIcon icon={<Sun />} />
          </CPColumn>
        </CPRow>
      </motion.div>
    </Block>
  );
}

export default Banner;
