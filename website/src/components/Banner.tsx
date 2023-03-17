import { Block, Styles } from "@cube-dev/ui-kit"
import {
  AddressBook,
  Aperture,
  ArrowArcLeft,
  ChalkboardTeacher,
  ChatCircleText,
  CodesandboxLogo,
  Confetti,
  Cube,
  FilmSlate,
  Football,
  Gift,
  Horse,
  Key,
  Keyboard,
  LightbulbFilament,
  Lightning,
  LockOpen,
  MusicNotesPlus,
  NavigationArrow,
  NotePencil,
  PaintBucket,
  Phone,
  PhoneSlash,
  PlusCircle,
  RedditLogo,
  RocketLaunch,
  ShieldStar,
  ShoppingCart,
  SoccerBall,
  Stack,
  Star,
  Student,
  Sun,
  Taxi,
  ThumbsUp,
  Train,
  TrainRegional,
  Trophy,
  UserCirclePlus,
  VideoCameraSlash,
  Wallet,
} from "@jengaicons/react"
import React, { useEffect, useRef, useState } from "react"
import BannerIcon from "./BannerIcon"
import { CPColumn, CPRow, CPText } from "./shared/library"

const RowLayout = ({
  children,
  styles,
  style,
  containerStyle,
  animationSpeed,
  fadeTop,
}: {
  children?: React.ReactNode
  styles?: Styles
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  animationSpeed?: string
  fadeTop?: string
}) => {
  return (
    <CPColumn
      width='90px'
      style={{
        position: "relative",
        ...containerStyle,
      }}
    >
      <CPColumn
        className='row'
        style={{
          height: "200%",
          position: "absolute",
          justifyContent: "space-around",
          animationDuration: animationSpeed,
          ...style,
        }}
      >
        <CPColumn
          style={{
            height: "50%",
            justifyContent: "space-around",
            ...style,
          }}
          styles={{
            ...styles,
          }}
        >
          {children}
        </CPColumn>

        <CPColumn
          style={{
            height: "50%",
            justifyContent: "space-around",
          }}
          styles={{
            ...styles,
          }}
        >
          {children}
        </CPColumn>
      </CPColumn>
    </CPColumn>
  )
}

const Icons2 = () => {
  const animationSpeed = "16s"

  return (
    <CPRow
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {/* HACK FOR ICON FADING */}
      {/* <CPRow
        style={{
          position: "absolute",
          width: "1100px",
          transform: "translate(-50%)",
          left: "50%",
          zIndex: 999,
          height: "100%",
        }}
      >
        <CPRow
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        />
      </CPRow> */}

      <CPRow
        className='banner-icons'
        style={{
          position: "absolute",
          height: "750px",
          overflow: "hidden",
          // it should be greater than > (width_per_row * no_rows) + (gap) * (no_rows - 1)
          width: "1100px",
          transform: "translate(-50%)",
          left: "50%",
          zIndex: 0,
        }}
        justifyContent='center'
        gap='50px'
      >
        <RowLayout>
          <BannerIcon icon={LockOpen} />
          <BannerIcon icon={VideoCameraSlash} />
          <BannerIcon icon={Wallet} />
          <BannerIcon icon={UserCirclePlus} />
          <BannerIcon icon={Key} />
          <BannerIcon icon={AddressBook} />
        </RowLayout>

        <RowLayout animationSpeed={animationSpeed} fadeTop='80px'>
          <BannerIcon icon={ChalkboardTeacher} />
          <BannerIcon icon={Confetti} />
          <BannerIcon icon={SoccerBall} />
          <BannerIcon icon={TrainRegional} />
          <BannerIcon icon={ChatCircleText} />
        </RowLayout>

        <RowLayout fadeTop='160px'>
          <BannerIcon icon={ShieldStar} />
          <BannerIcon icon={Keyboard} />
          <BannerIcon icon={RedditLogo} />
          <BannerIcon icon={NavigationArrow} />
          <BannerIcon icon={LightbulbFilament} />
        </RowLayout>

        <RowLayout animationSpeed={animationSpeed} fadeTop='240px'>
          <BannerIcon icon={Taxi} />
          <BannerIcon icon={Lightning} />
          <BannerIcon icon={Star} />
          <BannerIcon icon={CodesandboxLogo} />
        </RowLayout>

        <RowLayout fadeTop='240px'>
          <BannerIcon icon={NotePencil} />
          <BannerIcon icon={PaintBucket} />
          <BannerIcon icon={ShoppingCart} />
          <BannerIcon icon={Aperture} />
        </RowLayout>

        <RowLayout animationSpeed={animationSpeed} fadeTop='160px'>
          <BannerIcon icon={RocketLaunch} />
          <BannerIcon icon={Stack} />
          <BannerIcon icon={Trophy} />
          <BannerIcon icon={ThumbsUp} />
          <BannerIcon icon={FilmSlate} />
        </RowLayout>

        <RowLayout fadeTop='80px'>
          <BannerIcon icon={Student} />
          <BannerIcon icon={MusicNotesPlus} />
          <BannerIcon icon={Gift} />
          <BannerIcon icon={Horse} />
          <BannerIcon icon={TrainRegional} />
        </RowLayout>

        <RowLayout animationSpeed={animationSpeed}>
          <BannerIcon icon={Cube} />
          <BannerIcon icon={Confetti} />
          <BannerIcon icon={UserCirclePlus} />
          <BannerIcon icon={PlusCircle} />
          <BannerIcon icon={PaintBucket} />
          <BannerIcon icon={Stack} />
        </RowLayout>
      </CPRow>
    </CPRow>
  )
}

function Banner() {
  const bannerRef = useRef(null)
  // const x = useMotionValue(0)
  // const { scrollYProgress } = useScroll({
  //   container: bannerRef,
  // })
  // const transform = useTransform(scrollYProgress, [0, 1], [0, 1200])

  return (
    <Block
      padding={["60px 0 0 0", "40px"]}
      styles={{
        height: ["70vh", "650px"],
        overflow: "hidden",
        position: "relative",
      }}
      height='100vh'
      justifyContent='center'
    >
      <Block
        fill='var(--cp-surface-primary)'
        radius='2rem'
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
          color='white'
        >
          Jenga
        </CPText>
        <CPText
          styles={{
            fontSize: ["60px", "2.5rem"],
            fontWeight: "700",
            lineHeight: ["66px", "3rem"],
          }}
          color='white'
        >
          Icons
        </CPText>
      </Block>

      <Block
        styles={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "160px",
          background: "var(--banner-fade-effect-upside)",
          zIndex: "100",
          transform: "rotate(180deg)",
        }}
      />
      <Block
        styles={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "255px",
          background: "var(--banner-fade-effect-upside)",
          zIndex: "100",
        }}
      />
      <CPColumn>
        <Icons2 />
      </CPColumn>
    </Block>
  )
}

export default Banner
