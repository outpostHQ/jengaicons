import { CPRow, CPText, CPTextInput } from "@/components/shared/library"
import useTheme from "@/hooks/useTheme"
import { IconColorAtom } from "@/state/atoms"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"

import { HexColorPicker } from "react-colorful"
import tinycolor from "tinycolor2"
import { useDebounce } from "usehooks-ts"
import { useDetectClickOutside } from "react-detect-click-outside"

type TColorModes = "hex" | "rgb"
// type TRGBValue = { r: number; g: number; b: number }
type TColor = string

type TCommonColorInputProps = {
  color: TColor
  onChange: (color: TColor) => void
}

// type TCommonColorPickerProps = {
//   color: TColor
//   onChange: (color: TColor) => void
// }

// const ColorModeMenu = memo(function _({
//   colorMode,
//   onChange,
// }: {
//   colorMode: TColorModes
//   onChange: (color: TColorModes) => void
// }) {
//   return (
//     <MenuTrigger>
//       <CPButton
//         padding='10px'
//         height='100%'
//         rightIcon={<CaretDownFill />}
//         variant='clear'
//       >
//         <CPText transform='uppercase'>{colorMode}</CPText>
//       </CPButton>
//       <CPMenu
//         width='6.3rem'
//         onAction={onChange as (key: any) => void}
//         selectedKeys={colorMode}
//       >
//         <Item key='hex'>HEX</Item>
//         {/* <Item key='rgb'>RGB</Item> */}
//       </CPMenu>
//     </MenuTrigger>
//   )
// })

// const RGBInput = ({ color, onChange }: TCommonProps) => {
//   return (
//     <>
//       <CPRow width='100%'>
//         <CPNumberInput width='63x' minValue={0} maxValue={255} />
//         <CPNumberInput width='63x' minValue={0} maxValue={255} />
//         <CPNumberInput width='63x' minValue={0} maxValue={255} />
//       </CPRow>
//     </>
//   )
// }

const HexInput = ({ color, onChange }: TCommonColorInputProps) => {
  return (
    <>
      <CPTextInput
        placeholder='Pick a color...'
        value={color}
        onChange={onChange}
        width='150px'
      />
    </>
  )
}

const GetColorInput = ({
  colorMode,
  ...commonProps
}: {
  colorMode: TColorModes
} & TCommonColorInputProps) => {
  switch (colorMode) {
    case "rgb":
      return null
    case "hex":
      return <HexInput {...commonProps} />
  }
}

// const convertColor = ({
//   color,
//   colorMode,
// }: {
//   color: string
//   colorMode: TColorModes
// }) => {
//   switch (colorMode) {
//     case "rgb":
//       return {
//         r: 1,
//         g: 2,
//         b: 3,
//       } as TRGBValue

//     case "hex":
//       return color
//   }
// }

// const GetColorPicker = ({
//   colorMode,
//   ...commonProps
// }: {
//   colorMode: TColorModes
// } & TCommonColorPickerProps) => {
//   const handleRGB = useCallback(() => {}, [])
//   const color = useMemo(
//     () => convertColor({ color: commonProps.color, colorMode }),
//     [colorMode, commonProps.color],
//   )

//   switch (colorMode) {
//     case "rgb":
//       return (
//         <RgbColorPicker
//           {...commonProps}
//           color={color as TRGBValue}
//           onChange={handleRGB}
//         />
//       )
//     case "hex":
//       return <HexColorPicker {...commonProps} />
//   }
// }

type TColorPickerProps = {
  zIndex?: number
  marginTop?: string
  onChange?: (color: string) => void
  show?: boolean
  close: (e: Event) => void
}

export const ColorPicker = ({
  zIndex,
  marginTop,
  show,
  close = () => null,
}: TColorPickerProps) => {
  const [colorMode] = useState<TColorModes>("hex")
  const [IconColor, setIconColor] = useAtom(IconColorAtom)
  const [, setTheme] = useTheme()

  const [color, setColor] = useState(IconColor)

  const debouncedColor = useDebounce(color, 50)

  useEffect(() => {
    if (!show) return

    if (tinycolor(debouncedColor).isLight()) setTheme("dark")
    else setTheme("light")

    setIconColor(debouncedColor)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedColor, setIconColor, show])

  useEffect(() => {
    setColor(IconColor)
  }, [IconColor])

  const ref = useDetectClickOutside({ onTriggered: close })
  return show ? (
    <div ref={ref}>
      <CPRow
        className='cp-color-picker'
        styles={{
          width: 320,
          height: 377,
          borderRadius: "8px",
          position: "relative",
          backgroundColor: "var(--cp-surface)",
          marginTop,
        }}
        zIndex={zIndex}
        style={{
          border: "1px solid var(--cp-border)",
        }}
        padding='15px'
        flow='column nowrap'
        gap='20px'
      >
        <CPRow className='saturation-picker' width='100%' height='100%'>
          <HexColorPicker color={color} onChange={setColor} />
        </CPRow>
        {/* CONTROLS */}
        <CPRow width='100%' alignItems='center' justifyContent='space-between'>
          {/* <ColorModeMenu colorMode={colorMode} onChange={setColor} /> */}
          <CPText>HEX</CPText>
          <CPRow>
            {GetColorInput({
              color,
              colorMode,
              onChange: setColor,
            })}
          </CPRow>
        </CPRow>
      </CPRow>
    </div>
  ) : null
}
