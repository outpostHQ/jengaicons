import { useIconInfoDrawer } from "@/hooks/useIconInfoDrawer"
import { Block } from "@cube-dev/ui-kit"
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

const makeReactString = (IconProps: JengaIconProps) => {
  return Object.entries(IconProps).reduce((prev, [propName, propVal]) => {
    let _propVal = `"${propVal}"`
    if (typeof propVal !== "string") _propVal = `{${propVal}}`

    return `${prev} ${propName}=${_propVal}`
  }, "")
}

const IconInfoDrawer = () => {
  const [{ isOpen, selectedIcon }, { closeDrawer, openDrawer }] =
    useIconInfoDrawer()

  // TODO: added proper typings
  const SELECTED_ICON = // @ts-expect-error
  JengaIcons[selectedIcon] as ComponentType<JengaIconProps>
  const [iconSettings] = useIconSettings()

  const ReactString = useMemo(() => {
    if (!isOpen || !selectedIcon) return ""
    return makeReactString(iconSettings.props)
  }, [selectedIcon, iconSettings.props])

  useEffect(() => {
    if (isOpen && !selectedIcon)
      console.warn("Icon Info Drawer is Open without any selectedIcon")
  }, [isOpen])

  if (!isOpen || !selectedIcon) return null

  return (
    <CPRow
      styles={{
        position: "sticky",
        top: 80,
        overflowY: "scroll",
      }}
      justifyContent='space-between'
      flow='column nowrap'
      id='icon-info-drawer'
    >
      <Block>
        <CPRow
          alignItems='center'
          justifyContent='space-between'
          padding='.6125rem 1.25rem 0.8rem 1.25rem'
          style={{ borderBottom: "1px solid var(--cp-border)" }}
        >
          <CPText variant='displaySmall'>Student</CPText>
          <CPButton
            variant='clear'
            icon={<X />}
            label='close drawer'
            onClick={closeDrawer}
          />
        </CPRow>
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
          <CPRow
            justifyContent='center'
            alignItems='center'
            width='17.5rem'
            height='17.5rem'
          >
            <SELECTED_ICON {...iconSettings.props} size='13.75rem' />
          </CPRow>
          <CPColumn>
            <CPText>React:</CPText>
            <CPCopySnippet
              width='100%'
              language='javascript'
              code={`<${selectedIcon}${ReactString} />`}
            />
          </CPColumn>
        </CPColumn>
      </Block>
      <CPRow padding='1.25rem' justifyContent='space-between'>
        <CPButton variant='invisible' icon={<Copy />}>
          Copy SVG
        </CPButton>
        <CPButton variant='invisible' icon={<Download />}>
          Download SVG
        </CPButton>
      </CPRow>
    </CPRow>
  )
}

export default IconInfoDrawer
