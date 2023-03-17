import { Styles } from "@cube-dev/ui-kit"
import { CPRow } from "@/shared/library"
import IconWrapper from "@/components/IconWrapper"
import * as JengaIcons from "@jengaicons/react"
import { IconMetadata } from "@/types"
import { useFilteredIcons } from "@/hooks/useFilteredIcons"

const IconGrid = ({ styles }: { styles?: Styles }) => {
  const [icons] = useFilteredIcons()

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
