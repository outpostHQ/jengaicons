import {
  JengaIconContext,
  ActivityFill,
  Activity,
  AirplayMono,
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

          <AirplayMono size={300} alt='Airplay icon' />
        </div>
      </JengaIconContext.Provider>
    </main>
  )
}
