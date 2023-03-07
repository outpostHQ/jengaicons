import { JSXElementConstructor, ReactNode, useCallback } from "react"
import { CPButton, CPRow, CPText } from "@/shared/library"
import { IconMetadata } from "@/types/icon"
import useIconSettings from "@/hooks/useIconSettings"
import { useIconInfoDrawer } from "@/hooks/useIconInfoDrawer"

const IconWrapper = ({
  ICON,
  iconMetadata,
}: {
  ICON: () => React.ReactElement
  iconMetadata: IconMetadata
}) => {
  const [iconSettings] = useIconSettings()

  const [_, { selectIcon, openDrawer }] = useIconInfoDrawer()

  const handleIconClick = useCallback(() => {
    selectIcon(iconMetadata.safeName)
    openDrawer()
  }, [])

  const { filter } = iconSettings

  if (filter.variant !== iconMetadata.variant) return null
  if (filter.search && !iconMetadata.name.includes(filter.search)) return null

  return (
    <CPButton variant='clear' padding='0' onClick={handleIconClick}>
      <CPRow
        padding='1.25rem'
        radius='2r'
        flow='column nowrap'
        alignItems='center'
        justifyContent='center'
        gap='0.625rem'
        width='10rem'
        height='10rem'
        whiteSpace='pre-line'
      >
        {/* @ts-expect-error */}
        {<ICON {...iconSettings.props} />}
        <CPText className='truncate'>{iconMetadata.name}</CPText>
      </CPRow>
    </CPButton>
  )
}

export default IconWrapper
