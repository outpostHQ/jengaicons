import { Flex } from "@cube-dev/ui-kit"
import { Info, InfoFill, JengaIconContext } from "@jengaicons/react"
import { CPRow } from "@/shared/library"
import IconWrapper from "@/components/IconWrapper"
import * as JengaIcons from "@jengaicons/react"
import { allIconsMetaData } from "@/constants/icons"
import useIconSettings from "@/hooks/useIconSettings"
import useFetch from "@/hooks/useFetch"
import { GET_ICON_LENGTH } from "@/constants/api/paths"
import { IconMetadata } from "@/types"
import { GetLengthResponse } from "@/types/api/getLength"
import { useEffect } from "react"

const IconGrid = () => {
  const [iconSettings] = useIconSettings()

  const [loading, data, error] = useFetch<GetLengthResponse>({
    url: GET_ICON_LENGTH,
  })

  useEffect(() => {
    console.log("Loading", loading)

    if (data) console.log("Data", data)
    if (error) console.log("Error", error)
  }, [loading])

  return (
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
  )
}

export default IconGrid
