import { useIconInfoDrawer } from "@/hooks/useIconInfoDrawer"
import { Block, useToastsApi } from "@cube-dev/ui-kit"
import { Copy, Download, JengaIconProps, X } from "@jengaicons/react"
import React, { ComponentType, useCallback, useEffect, useMemo } from "react"
import {
  CPButton,
  CPColumn,
  CPCopySnippet,
  CPRow,
  CPText,
} from "@/shared/library"

// TODO: LazyLoad
import * as JengaIcons from "@jengaicons/react"
import useIconSettings from "@/hooks/useIconSettings"
import useFetch from "@/hooks/useFetch"
import { GetSVGRequestBody, GetSVGResponseBody } from "@/types/api/getSVG"
import { TIconSafeName, TVariants } from "@/types/icon"
import { GET_ICON_SVG } from "@/constants/api/paths"
import fileDownload from "js-file-download"
import { getSVGIconURL } from "@/utils/icons"
import { copyToClipboard } from "@/utils"
import { useAtom, useAtomValue } from "jotai"
import {
  IconColorAtom,
  IconSizeAtom,
  IconVariantAtom,
  IconWeightAtom,
  IsDrawerOpenAtom,
  selectedIconAtom,
} from "@/state/atoms"

const makeReactString = (
  IconProps: JengaIconProps | JengaIcons.JengaIconRegularProps,
) => {
  return Object.entries(IconProps).reduce((prev, [propName, propVal]) => {
    let _propVal = `"${propVal}"`
    if (typeof propVal !== "string") _propVal = `{${propVal}}`

    return `${prev} ${propName}=${_propVal}`
  }, "")
}

const IconHeader = ({
  onClose,
  iconName,
}: {
  onClose: () => void
  iconName: string
}) => {
  const [{ isOpen, selectedIcon }, { closeDrawer, openDrawer }] =
    useIconInfoDrawer()

  return (
    <CPRow
      height='52px'
      alignItems='center'
      justifyContent='space-between'
      padding='.6125rem 1.25rem 0.8rem 1.25rem'
      style={{ borderBottom: "1px solid var(--cp-border)" }}
    >
      <CPText variant='displaySmall' className='truncate'>
        {iconName}
      </CPText>
      <CPButton
        variant='clear'
        icon={<X />}
        label='close drawer'
        onClick={onClose}
      />
    </CPRow>
  )
}

const IconPreview = () => {
  const selectedIcon = useAtomValue(selectedIconAtom)
  const weight = useAtomValue(IconWeightAtom)
  const color = useAtomValue(IconColorAtom)

  // TODO: added proper typings
  const SELECTED_ICON = // @ts-expect-error
    JengaIcons[selectedIcon] as ComponentType<
      JengaIconProps | JengaIcons.JengaIconRegularProps
    >

  return (
    <CPRow justifyContent='center' alignItems='center'>
      <CPRow
        justifyContent='center'
        alignItems='center'
        width='17.5rem'
        height='17.5rem'
        styles={{
          borderRadius: "8px",
          boxShadow: "inset 0px 0px 8px 0.5px var(--cp-shadow)",
        }}
        style={{ border: "1px solid var(--cp-border)" }}
      >
        <SELECTED_ICON color={color} weight={weight} size='13.75rem' />
      </CPRow>
    </CPRow>
  )
}

const CodeBlock = () => {
  const selectedIcon = useAtomValue(selectedIconAtom)
  const weight = useAtomValue(IconWeightAtom)
  const color = useAtomValue(IconColorAtom)
  const size = useAtomValue(IconSizeAtom)

  const ReactString = useMemo(() => {
    return makeReactString({
      color,
      weight,
      size,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CPColumn>
      <CPText>React:</CPText>
      <CPCopySnippet
        width='100%'
        language='javascript'
        code={`<${selectedIcon}${ReactString} />`}
      />
    </CPColumn>
  )
}

const IconActions = () => {
  const variant = useAtomValue(IconVariantAtom)
  const iconSafeName = useAtomValue(selectedIconAtom) as string

  const { response: SVGResponse, request: requestSVG } =
    useFetch<GetSVGResponseBody>({
      url: getSVGIconURL({
        iconSafeName,
        variant,
      }),
      type: "GET",
      makeInitialReq: true,
    })

  const { toast } = useToastsApi()

  const handleCopySVG = useCallback(() => {
    requestSVG({
      cached: true,
    }).then(() => {
      let isCopied = false

      if (SVGResponse) isCopied = copyToClipboard(SVGResponse)

      if (isCopied) toast.success("Copied svg to clipboard")
      else toast.danger("Failed to copy svg to clipboard")
    })
  }, [requestSVG, SVGResponse, toast])

  const handleDownloadSVG = useCallback(() => {
    toast.attention("Downloading...")
    requestSVG({
      cached: true,
    }).then(() => {
      if (SVGResponse) {
        toast.success("Downloaded")
        fileDownload(SVGResponse, `${iconSafeName}.svg`, "image/svg+xml")
      } else {
        toast.danger("Failed to download svg")
      }
    })
  }, [toast, requestSVG, SVGResponse, iconSafeName])

  return (
    <CPRow
      padding='1.25rem'
      justifyContent='space-between'
      style={{ borderTop: "1px solid var(--cp-border)" }}
    >
      <CPButton variant='invisible' icon={<Copy />} onClick={handleCopySVG}>
        Copy SVG
      </CPButton>

      <CPButton
        variant='invisible'
        icon={<Download />}
        onClick={handleDownloadSVG}
      >
        Download SVG
      </CPButton>
    </CPRow>
  )
}

const IconInfoDrawer = () => {
  const [isOpen, setIsOpen] = useAtom(IsDrawerOpenAtom)
  const [selectedIcon, setSelectedIcon] = useAtom(selectedIconAtom)

  useEffect(() => {
    if (isOpen && !selectedIcon)
      console.warn("Icon Info Drawer is Open without any selectedIcon")
  }, [isOpen, selectedIcon])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setSelectedIcon(null)
  }, [setIsOpen, setSelectedIcon])

  if (!isOpen || !selectedIcon) return null

  return (
    <CPRow
      height='100%'
      styles={{
        borderBottom: "1px solid var(--cp-border)",
        backgroundColor: "var(--cp-surface)",
        minWidth: "320px",
      }}
      style={{ borderLeft: "1px solid var(--cp-border)" }}
      width={["320px", "320px", "100%"]}
      justifyContent='space-between'
      flow='column nowrap'
      overflow='auto'
    >
      <Block>
        <IconHeader onClose={handleClose} iconName={selectedIcon} />
        <CPColumn padding='1.25rem' gap='1.25rem' flex='1'>
          <CPRow>
            <CPButton
              width='100%'
              fontWeight='500'
              styles={{
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                borderRightWidth: 0,
              }}
              style={{ boxShadow: "inset 0px 0px 12px 0.5px var(--cp-shadow)" }}
              variant='outline'
              fill='var(--cp-surface-primary)'
            >
              Code block
            </CPButton>
            <CPButton
              width='100%'
              fontWeight='500'
              styles={{
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
              variant='outline'
            >
              Preview
            </CPButton>
          </CPRow>
          <IconPreview />
          <CodeBlock />
        </CPColumn>
      </Block>
      <IconActions />
    </CPRow>
  )
}

export default IconInfoDrawer
