import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ApolloContext } from '../context/Apollo'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function Router() {
  const { sessionUid: session } = useContext(ApolloContext)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(!session && <SignIn />) || <Home />} />
        {!session && <Route path="/signup" element={<SignUp />} />}
      </Routes>
    </div>
  )
}

export default Router
