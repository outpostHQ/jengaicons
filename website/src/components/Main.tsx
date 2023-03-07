import { Block } from "@cube-dev/ui-kit"
import IconControls from "@/components/IconControls"
import IconGrid from "@/components/IconGrid"
import IconInfoDrawer from "@/components/IconInfoDrawer"
import { CPRow } from "@/shared/library"
import SectionContainer from "@/shared/SectionContainer"

function Main() {
  return (
    <Block style={{ position: "relative" }}>
      <IconControls />
      <SectionContainer>
        <CPRow
          flow='row nowrap'
          justifyContent='flex-start'
          alignItems='flex-start'
          height='4000px'
        >
          <IconGrid />
          <IconInfoDrawer />
        </CPRow>
      </SectionContainer>
    </Block>
  )
}

export default Main
