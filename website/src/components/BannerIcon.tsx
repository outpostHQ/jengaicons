import { Block } from "@cube-dev/ui-kit"
import { JengaIconProps } from "@jengaicons/react"
import React, { ComponentType } from "react"
import { CPRow } from "./shared/library"

function BannerIcon({
  icon: ICON,
  ...jengaiconProps
}: { icon: ComponentType<JengaIconProps> } & JengaIconProps) {
  return (
    <CPRow
      padding='12px'
      justifyContent='center'
      alignItems='center'
      styles={{
        background: "var(--banner-icon-bg)",
        boxShadow: "var(--banner-icon-box-shadow)",
        border: "1px solid var(--cp-border)",
        borderRadius: "10px",
        width: "max-content",
      }}
    >
      <Block>
        <ICON size='60px' {...jengaiconProps} />
      </Block>
    </CPRow>
  )
}

export default BannerIcon
