import { ColorPicker } from "@/components/ColorPicker"
import { CPButton, CPRow, CPText } from "@/components/shared/library"
import useIconSettings from "@/hooks/useIconSettings"
import { useCallback, useState } from "react"

const Page = () => {
  const [iconSettings] = useIconSettings()
  const [showPicker, setShowPicker] = useState(false)

  const handlePress = useCallback(() => {
    setShowPicker((prev) => !prev)
  }, [])

  return (
    <>
      <CPButton
        styles={{
          border: "1px solid var(--cp-border)",
          borderRadius: "8px",
        }}
        height='100%'
        variant='outline'
        margin='0'
        padding='0'
        onPress={handlePress}
      >
        <CPRow height='100%' padding='8px' alignItems='center' gap='8px'>
          <canvas
            id='icon-controls-color-picker'
            style={{
              backgroundColor: iconSettings.props.color,
            }}
          />

          <CPText
            styles={{
              display: ["block", "block", "none"],
            }}
          >
            {iconSettings.props.color}
          </CPText>
        </CPRow>
      </CPButton>
      {showPicker ? (
        <CPRow
          styles={{
            position: "static",
            marginTop: "10px",
          }}
        >
          <ColorPicker />
        </CPRow>
      ) : null}
    </>
  )
}

export default Page
