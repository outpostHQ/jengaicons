import { ActivityFill, Activity, AirplayMono } from "@jengaicons/react"

export default function Home() {
  return (
    <main>
      <div>
        <ActivityFill color='blue' />
        <Activity />
        <AirplayMono size={300} className='stroke-black' />
        <Activity size={300} className='text-purple-200' />
      </div>
    </main>
  )
}
