import React, { useContext, useState } from 'react'
import AsideMenu from '../components/AsideMenu'
import NavBar from '../components/NavBar'
import { ApolloContext } from '../context/Apollo'
import Colors from '../utils/Colors'
import Margins from '../utils/Margins'

export type TScreens =
  | 'Posts'
  | 'Mail'
  | 'Accounts'
  | 'Analytics'
  | 'MyAccount'
  | 'New'
  | 'Category'
  | 'Tags'
  | undefined

function Home() {
  const { isMobile } = useContext(ApolloContext)

  const [screen, setScreen] = useState<TScreens>()
  const [expandedAsideMenu, setExpandedAsideMenu] = useState(!isMobile)

  return (
    <div>
      <NavBar
        expandedAside={expandedAsideMenu}
        setExpandedAside={setExpandedAsideMenu}
      />
      <main
        style={{
          background: Colors.dark,
          minHeight: 'calc(100vh - 70px)',
          width: '100vw',
          position: 'fixed',
          top: 70,
          left: 0,
          paddingLeft: expandedAsideMenu
            ? 250 + Margins.padding
            : Margins.padding,
          paddingRight: Margins.padding,
          paddingTop: 70,
        }}
      >
        <AsideMenu
          screen={screen}
          setScreen={setScreen}
          expanded={expandedAsideMenu}
        />
      </main>
    </div>
  )
}

export default Home
