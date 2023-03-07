import Hero from "@/components/Hero"
import Main from "@/components/Main"
import { CPColumn } from "@/components/shared/library"
import { Block } from "@cube-dev/ui-kit"
import { Inter } from "@next/font/google"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark")
  }, [])

  return (
    <CPColumn>
      <Block>
        {/* <Block
          styles={{
            height: ["100vh", "650px"],
            // background: "url('/Hero.svg')",
            // backgroundSize: "100%",
          }}
        ></Block> */}
      </Block>
      <Hero />
      <Main />
    </CPColumn>
  )
}
