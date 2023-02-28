import { JSXElementConstructor, ReactNode } from 'react'
import { CPButton, CPRow, CPText } from './shared/library'
import { IconMetadata } from '../../../scripts/generate-jengaicons-react/types'
import useIconSettings from '@/hooks/useIconSettings'

const IconWrapper = ({
  ICON,
  iconMetadata,
}: {
  ICON: () => React.ReactElement
  iconMetadata: IconMetadata
}) => {
  const [iconSettings] = useIconSettings()
  const { filter } = iconSettings

  if (filter.variant !== iconMetadata.variant) return null
  if (filter.search && !iconMetadata.name.includes(filter.search)) return null

  return (
    <CPButton variant='clear'>
      <CPRow
        padding='2rem'
        radius='2r'
        flow='column nowrap'
        alignItems='center'
        justifyContent='center'
        gap='1rem'
      >
        {/* @ts-expect-error */}
        {<ICON {...iconSettings.props} />}
        <CPText className='truncate'>{iconMetadata.name}</CPText>
      </CPRow>
    </CPButton>
  )
}

export default IconWrapper
