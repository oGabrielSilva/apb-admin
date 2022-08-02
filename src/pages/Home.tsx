import React, { useState } from 'react'
import AsideMenu from '../components/AsideMenu'
import Colors from '../utils/Colors'

export type TScreens =
  | 'Posts'
  | 'Mail'
  | 'Accounts'
  | 'Analytics'
  | 'MyAccount'
  | 'New'
  | undefined

function Home() {
  const [screen, setScreen] = useState<TScreens>()

  return (
    <div>
      <main
        style={{
          background: Colors.dark,
          minHeight: '100vh',
          width: 'calc(100vw - 26px)',
        }}
      >
        <AsideMenu screen={screen} setScreen={setScreen} />
      </main>
    </div>
  )
}

export default Home
