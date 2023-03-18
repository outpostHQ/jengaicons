import Banner from "@/components/Banner"
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import { CPColumn } from "@/components/shared/library"

import { GetStaticProps } from "next/types"

type THomeProps = {
  totalIcons: string
}

export default function Home({ totalIcons }: THomeProps) {
  return (
    <CPColumn>
      <Banner />
      <Hero totalIcons={totalIcons} />
      <Main />
    </CPColumn>
  )
}

export const getStaticProps: GetStaticProps<THomeProps> = async () => {
  const totalIcons = (
    await import("@/constants/icons").then((icons) => icons.allIconsMetaData)
  ).length.toLocaleString("en-US")

  return {
    props: {
      totalIcons,
    },
  }
}
