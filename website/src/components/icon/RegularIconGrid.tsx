import IconWrapper from "@/components/IconWrapper"
import * as JengaRegularIcons from "@jengaicons/react/icons/regular"
import { RegularIconMetaData } from "@/constants/icons"
import dynamic from "next/dynamic"

const RegularIconGrid = () => {
  return (
    <>
      {RegularIconMetaData.map((iconMD, idx) => {
        // @ts-expect-error
        const ICON = JengaRegularIcons[iconMD]

        return (
          <IconWrapper
            key={`${iconMD.safeName}${idx}`}
            ICON={ICON}
            iconMetadata={{ ...iconMD, variant: "regular" }}
          />
        )
      })}
    </>
  )
}

export default RegularIconGrid
