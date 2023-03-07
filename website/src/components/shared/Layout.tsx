import { Block } from "@cube-dev/ui-kit"
import React, { ReactNode } from "react"
import Footer from "./Footer"
import { CPColumn } from "./library"

function Layout({ children }: { children: ReactNode }) {
  return (
    <CPColumn className='site-container' styles={{ minHeight: "100vh" }}>
      <Block flex='1'>{children}</Block>
      <Footer />
    </CPColumn>
  )
}

export default Layout
