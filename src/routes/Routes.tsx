import React, { useLayoutEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ApolloContextProvider from '../context/Apollo'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Constants from '../utils/Constants'

function Router() {
  const [session, setSession] = useState<string | null>(null)

  useLayoutEffect(
    () => setSession(localStorage.getItem(Constants.sessionKey)),
    []
  )

  return (
    <div className="App">
      <ApolloContextProvider>
        <Routes>
          <Route path="/" element={(!session && <SignIn />) || <Home />} />
          {!session && <Route path="/signup" element={<SignUp />} />}
        </Routes>
      </ApolloContextProvider>
    </div>
  )
}

export default Router
