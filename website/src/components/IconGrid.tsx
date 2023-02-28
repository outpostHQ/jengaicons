import { Flex } from '@cube-dev/ui-kit'
import { Info, InfoFill, JengaIconContext } from '@jengaicons/react'
import { CPRow } from './shared/library'
import IconWrapper from './IconWrapper'
import * as JengaIcons from '@jengaicons/react'
import allIconsData from '../../../optimized/allIconsData.json'
import { IconMetadata } from '../../../scripts/generate-jengaicons-react/types'
import useIconSettings from '@/hooks/useIconSettings'

const IconGrid = () => {
  const [iconSettings] = useIconSettings()
  return (
    <CPRow width='100%' flow='row wrap' gap='1rem'>
      {allIconsData.map((iconMetaData) => {
        // @ts-expect-error
        const ICON = JengaIcons[
          iconMetaData.safeName
        ] as () => React.ReactElement
        return (
          <IconWrapper
            key={iconMetaData.safeName}
            ICON={ICON}
            iconMetadata={iconMetaData as IconMetadata}
          />
        )
      })}
    </CPRow>
  )
}

export default IconGrid
