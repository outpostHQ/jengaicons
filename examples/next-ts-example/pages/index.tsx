import {
  JengaIconContext,
  ActivityFill,
  Activity,
  Cube,
} from "@jengaicons/react"

export default function Home() {
  return (
    <main>
      <div style={{ color: "green" }}>
        <Activity weight={"0.5px"} size='300px' />
      </div>
      <JengaIconContext.Provider
        value={{
          color: "red",
        }}
      >
        <div>
          <ActivityFill size={300} />

          <Cube size={300} alt='Just a cube spinning :)'>
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
        </div>
      </JengaIconContext.Provider>
    </main>
  )
}
