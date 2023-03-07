import { Block } from "@cube-dev/ui-kit"
import IconControls from "@/components/IconControls"
import IconGrid from "./IconGrid"
import SectionContainer from "./shared/SectionContainer"
import Sidebar from "./Sidebar"

function Main() {
  return (
    <Block style={{ position: "relative" }}>
      <IconControls />
      <SectionContainer>
        {/* <Sidebar /> */}
        <IconGrid />
      </SectionContainer>
    </Block>
  )
}

export default Main
