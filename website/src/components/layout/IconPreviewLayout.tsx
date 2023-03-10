import IconGrid from "@/components/IconGrid"
import IconInfoDrawer from "@/components/IconInfoDrawer"
import { CPRow } from "@/shared/library"
import SectionContainer from "@/shared/SectionContainer"
import { Block, Styles } from "@cube-dev/ui-kit"
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
        padding: ["0 140px"],
        ...styles,
      }}
    >
      {children}
    </Block>
  )
}

export const IconPreviewLayout = () => {
  return (
    <CPRow flow='column nowrap' alignItems='center'>
      <Container
        styles={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
          backgroundColor: "var(--cp-surface)",
          boxShadow: "0px 4px 12px 0.75px var(--cp-shadow)",
        }}
      >
        <IconControls styles={{ backgroundColor: "transparent" }} />
        <Block
          styles={{
            position: "absolute",
            right: 0,
            zIndex: 999,
            height: "100vh",
          }}
        >
          <IconInfoDrawer />
        </Block>
      </Container>

      <Container
        style={{
          boxShadow: "0px 4px 12px 0.75px var(--cp-shadow)",
          zIndex: 2,
        }}
      >
        <IconGrid />
      </Container>
    </CPRow>
  )
}
