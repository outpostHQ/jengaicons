import { Styles } from "@cube-dev/ui-kit"
import { CPRow } from "@/shared/library"
import IconWrapper from "@/components/IconWrapper"
import * as JengaIcons from "@jengaicons/react"
import { allIconsMetaData } from "@/constants/icons"
import useIconSettings from "@/hooks/useIconSettings"
import { IconMetadata } from "@/types"
import { useEffect, useState } from "react"
import Fuse from "fuse.js"

const IconSearch = new Fuse(allIconsMetaData, {
  keys: ["name"],
})

const fewRegularVariants = allIconsMetaData
  // .slice(0, 60)
  .filter((val) => val.variant === "regular")

const IconGrid = ({ styles }: { styles?: Styles }) => {
  const [iconSettings] = useIconSettings()

  const [icons, setIcons] = useState(fewRegularVariants)

  useEffect(() => {
    setIcons(() =>
      allIconsMetaData.filter(
        (val) => val.variant === iconSettings.filter.variant,
      ),
    )
  }, [iconSettings.filter.variant])

  return (
    <CPRow
      flow='row nowrap'
      justifyContent='flex-start'
      alignItems='flex-start'
      styles={styles}
    >
      <CPRow width='100%' flow='row wrap' justifyContent={"space-around"}>
        {icons.map((iconMetaData, idx) => {
          // @ts-expect-error
          const ICON = JengaIcons[
            iconMetaData.safeName
          ] as () => React.ReactElement
          return (
            <IconWrapper
              key={`${iconMetaData.safeName}${idx}`}
              ICON={ICON}
              iconMetadata={iconMetaData as IconMetadata}
            />
          )
        })}
      </CPRow>
    </CPRow>
  )
}

export default IconGrid
