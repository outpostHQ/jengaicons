import { ActivityFill, Record, RecordFill } from "@jengaicons/react"

export default function Home() {
  return (
    <main>
      <div>
        <ActivityFill color='blue' />
        <Record />
        <RecordFill size={300} className='stroke-black' />
      </div>
    </main>
  )
}
