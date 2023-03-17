import IconGrid from "@/components/IconGrid"
import IconInfoDrawer from "@/components/IconInfoDrawer"
import { useElementHeight } from "@/hooks/useElementHeight"
import { CPRow } from "@/shared/library"
import SectionContainer from "@/shared/SectionContainer"
import { Block, Styles } from "@cube-dev/ui-kit"
import { useEffect } from "react"
import IconControls from "../IconControls"

const Container = ({
  children,
  styles,
  style,
}: {
  children: React.ReactNode
  styles?: Styles
  style?: Parameters<typeof Block>[0]["style"]
}) => {
  return (
    <Block
      styles={{
        ...styles,
      }}
    >
      {children}
    </Block>
  )
}

export const IconPreviewLayout = () => {
  const [height, elementRef] = useElementHeight()

  return (
    <CPRow flow='column nowrap' alignItems='center'>
      <Container
        styles={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "var(--cp-surface)",
        }}
      >
        <IconControls
          // @ts-expect-error
          ref={elementRef}
          styles={{
            boxShadow: "0px 4px 12px 0.75px var(--cp-shadow)",
            padding: ["20px 140px", "20px 140px", "20px 10px"],
            zIndex: 2,
          }}
        />
        <Block
          styles={{
            position: "absolute",
            right: 0,
            height: `calc(100vh - ${height}px)`,
            zIndex: 0,
          }}
        >
          <IconInfoDrawer />
        </Block>
      </Container>

      <Container
        styles={{
          padding: ["20px 140px", "20px 80px", "0"],
          zIndex: 0,
        }}
      >
        <IconGrid />
      </Container>
    </CPRow>
  )
}
