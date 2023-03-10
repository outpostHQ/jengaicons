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
      <CPText variant='displaySmall'>{iconName}</CPText>
      <CPButton
        variant='clear'
        icon={<X />}
        label='close drawer'
        onClick={onClose}
      />
    </CPRow>
  )
}

const IconPreview = ({
  iconProps,
  selectedIcon,
}: {
  iconProps: JengaIconProps
  selectedIcon: string
}) => {
  // TODO: added proper typings
  const SELECTED_ICON = // @ts-expect-error
    JengaIcons[selectedIcon] as ComponentType<JengaIconProps>

  return (
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
      <SELECTED_ICON {...iconProps} size='13.75rem' />
    </CPRow>
  )
}

const CodeBlock = ({
  iconProps,
  isDrawerOpen,
  selectedIcon,
}: {
  isDrawerOpen: boolean
  selectedIcon: string
  iconProps: JengaIconProps
}) => {
  const ReactString = useMemo(() => {
    if (!isDrawerOpen || !selectedIcon) return ""
    return makeReactString(iconProps)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIcon, iconProps])

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
  return (
    <CPRow
      padding='1.25rem'
      justifyContent='space-between'
      style={{ borderTop: "1px solid var(--cp-border)" }}
    >
      <CPButton variant='invisible' icon={<Copy />}>
        Copy SVG
      </CPButton>
      <CPButton variant='invisible' icon={<Download />}>
        Download SVG
      </CPButton>
    </CPRow>
  )
}

const IconInfoDrawer = () => {
  const [{ isOpen, selectedIcon }, { closeDrawer, openDrawer }] =
    useIconInfoDrawer()

  const [iconSettings] = useIconSettings()

  useEffect(() => {
    if (isOpen && !selectedIcon)
      console.warn("Icon Info Drawer is Open without any selectedIcon")
  }, [isOpen])

  if (!isOpen || !selectedIcon) return null

  return (
    <CPRow
      styles={{
        position: "sticky",
        top: 0,
        borderBottom: "1px solid var(--cp-border)",
        backgroundColor: "var(--cp-surface)",
      }}
      style={{ borderLeft: "1px solid var(--cp-border)" }}
      height='100%'
      width='320px'
      justifyContent='space-between'
      flow='column nowrap'
      id='icon-info-drawer'
    >
      <Block>
        <IconHeader onClose={closeDrawer} iconName={selectedIcon} />
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
          <IconPreview
            iconProps={iconSettings.props}
            selectedIcon={selectedIcon}
          />
          <CodeBlock
            iconProps={iconSettings.props}
            isDrawerOpen={isOpen}
            selectedIcon={selectedIcon}
          />
        </CPColumn>
      </Block>
      <IconActions />
    </CPRow>
  )
}

export default IconInfoDrawer
