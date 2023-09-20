import { ActivityFill, Record, RecordFill } from "@jengaicons/react"

export default function Home() {
  return (
    <main>
      <div>
        <ActivityFill color='blue' />
        <Record />
        <RecordFill size={300} className='stroke-black' />
        <Record size={300} className='text-purple-200' />
      </div>
    </main>
  )
}
