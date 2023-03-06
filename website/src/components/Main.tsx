import { Block } from '@cube-dev/ui-kit'
import Header from './Header'
import IconGrid from './IconGrid'
import SectionContainer from './shared/SectionContainer'
import Sidebar from './Sidebar'

function Main() {
  return (
    <Block style={{ position: 'relative' }}>
      <Header />
      <SectionContainer>
        {/* <Sidebar /> */}
        <IconGrid />
      </SectionContainer>
    </Block>
  )
}

export default Main
