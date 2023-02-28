import { Block } from '@cube-dev/ui-kit'
import Header from './Header'
import IconGrid from './IconGrid'
import SectionContainer from './shared/SectionContainer'
import Sidebar from './Sidebar'

function Main() {
  return (
    <Block style={{ position: 'relative' }}>
      <Block>
        <Header />
      </Block>
      <SectionContainer
        style={{
          minHeight: '200vh',
        }}
      >
        {/* <Sidebar /> */}
        <IconGrid />
      </SectionContainer>
    </Block>
  )
}

export default Main
