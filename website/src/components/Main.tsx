import { Block } from "@cube-dev/ui-kit";
import Header from "./Header";
import SectionContainer from "./shared/SectionContainer";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <Block style={{ position: "relative" }}>
      <Block>
        <Header />
      </Block>
      <SectionContainer>
        <Sidebar />
      </SectionContainer>
    </Block>
  );
}

export default Main;
