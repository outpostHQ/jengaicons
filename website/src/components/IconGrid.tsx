import { Styles } from "@cube-dev/ui-kit"
import { CPRow } from "@/shared/library"
import IconWrapper from "@/components/IconWrapper"
import * as JengaIcons from "@jengaicons/react"
import { allIconsMetaData } from "@/constants/icons"
import useIconSettings from "@/hooks/useIconSettings"
import { IconMetadata } from "@/types"

const IconGrid = ({ styles }: { styles?: Styles }) => {
  const [iconSettings] = useIconSettings()

  return (
    <CPRow
      flow='row nowrap'
      justifyContent='flex-start'
      alignItems='flex-start'
      height='4000px'
      styles={styles}
    >
      <CPRow width='100%' flow='row wrap' justifyContent='space-between'>
        {allIconsMetaData.slice(0, 30).map((iconMetaData, idx) => {
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
