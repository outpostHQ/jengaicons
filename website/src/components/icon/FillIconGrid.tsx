import IconWrapper from '@/components/IconWrapper'
import * as JengaFillIcons from '@jengaicons/react/icons/fill'
import { FillIconMetaData } from '@/constants/icons'

const FillIconGrid = () => {
  return (
    <>
      {FillIconMetaData.map((iconMD, idx) => {
        // @ts-expect-error
        const ICON = JengaFillIcons[iconMD.safeName] as () => React.ReactElement

        return (
          <IconWrapper
            key={`${iconMD.safeName}${idx}`}
            ICON={ICON}
            iconMetadata={{ ...iconMD, variant: 'fill' }}
          />
        )
      })}
    </>
  )
}

export default FillIconGrid
