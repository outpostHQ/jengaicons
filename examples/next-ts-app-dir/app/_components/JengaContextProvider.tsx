"use client"

import { JengaIconContext } from "@jengaicons/react"
import { ReactNode } from "react"

export const JengaIconsContextProvider = ({ children }: { children: any }) => {
  return (
    <JengaIconContext.Provider
      value={{
        size: 33,
        color: "red",
      }}
    >
      {children}
    </JengaIconContext.Provider>
  )
}
