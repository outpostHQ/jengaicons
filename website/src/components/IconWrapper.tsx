import {
  ComponentType,
  JSXElementConstructor,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react"
import { CPButton, CPRow, CPText } from "@/shared/library"
import { IconMetadata, TIconSafeName } from "@/types/icon"
import useIconSettings from "@/hooks/useIconSettings"
import { useIconInfoDrawer } from "@/hooks/useIconInfoDrawer"
import { useAtomValue, useSetAtom } from "jotai"
import {
  IconColorAtom,
  IconCornerAtom,
  IconSizeAtom,
  IconWeightAtom,
  IconVariantAtom,
  IsDrawerOpenAtom,
  selectedIconAtom,
} from "@/state/atoms"
import { JengaIconProps, JengaIconRegularProps } from "@jengaicons/react"

import { useIntersectionObserver } from "usehooks-ts"

const DisplayIcon = ({
  ICON,
  isVisible,
}: {
  ICON: ComponentType<JengaIconProps | JengaIconRegularProps>
  isVisible: boolean
}) => {
  const color = useAtomValue(IconColorAtom)
  // const corner = useAtomValue(IconCornerAtom)
  const size = useAtomValue(IconSizeAtom)
  const weight = useAtomValue(IconWeightAtom)

  return <ICON color={color} size={size} weight={weight} />
}

const IconWrapper = ({
  iconMetadata,
  ICON,
}: {
  iconMetadata: IconMetadata
  ICON: () => JSX.Element
}) => {
  const setIsDrawerOpen = useSetAtom(IsDrawerOpenAtom)
  const selectIcon = useSetAtom(selectedIconAtom)
  const handleIconClick = useCallback(() => {
    selectIcon(iconMetadata.safeName)
    setIsDrawerOpen(true)
  }, [iconMetadata.safeName, selectIcon, setIsDrawerOpen])

  const ref = useRef(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: false,
  })
  const isVisible = !!entry?.isIntersecting

  return (
    <CPButton
      variant='clear'
      padding='0'
      onClick={handleIconClick}
      styles={{
        display: isVisible ? "block" : "block",
      }}
    >
      <CPRow
        ref={ref}
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
        {isVisible ? (
          <DisplayIcon isVisible={isVisible} ICON={ICON} />
        ) : (
          <canvas width='32px' height='32px' />
        )}
        <CPText>{iconMetadata.name}</CPText>
      </CPRow>
    </CPButton>
  )
}

export default IconWrapper
