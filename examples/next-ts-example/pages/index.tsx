import {
  JengaIconContext,
  ActivityFill,
  Activity,
  Cube,
} from '@jengaicons/react'

export default function Home() {
  return (
    <>
      <JengaIconContext.Provider
        value={{
          color: 'red',
        }}
      >
        <main>
          <ActivityFill size={300} />
          <div style={{ color: 'green' }}>
            <Activity weight={0.5} size='300px' color='currentColor' />
          </div>

          <Cube color='blue' size={300} weight='1'>
            <animate
              attributeName='opacity'
              values='0;1;0'
              dur='4s'
              repeatCount='indefinite'
            ></animate>
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              type='rotate'
              dur='5s'
              from='0 0 0'
              to='360 0 0'
              repeatCount='indefinite'
            ></animateTransform>
          </Cube>
        </main>
      </JengaIconContext.Provider>
    </>
  )
}
