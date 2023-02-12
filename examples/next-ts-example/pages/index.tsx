import { ActivityFill, JengaIconContext } from '@jengaicons/react'

export default function Home() {
  return (
    <>
      <main>
        <JengaIconContext.Provider
          value={{
            alt: 'yoyo',
            color: 'red',
            mirrored: false,
          }}
        >
          <div style={{ color: 'green' }}>
            <ActivityFill />
          </div>
        </JengaIconContext.Provider>
      </main>
    </>
  )
}
