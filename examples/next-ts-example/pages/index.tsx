import {
  JengaIconContext,
  ActivityFill,
  Activity,
  Cube,
} from '@jengaicons/react'

export default function Home() {
  return (
    <JengaIconContext.Provider
      value={{
        color: 'var(--icn-color)', // or color: 'red',
      
      }}
    >
      <main>
        <ActivityFill size={300} />
        <div style={{ color: 'green' }}>
          <Activity weight={0.5} size='300px' color='currentColor' />
        </div>

        <Cube size={300} weight='1'>
          <animate
            attributeName='opacity'
            values='0;1;0'
            dur='4s'
            repeatCount='indefinite'
          />
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            dur='5s'
            from='0 0 0'
            to='360 0 0'
            repeatCount='indefinite'
          />
        </Cube>
      </main>
    </JengaIconContext.Provider>
  )
}
