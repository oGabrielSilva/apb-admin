import React, { useContext } from 'react'
import { ApolloContext } from '../context/Apollo'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function Routes() {
  const { sessionUid: session, path } = useContext(ApolloContext)

  switch (path) {
    case '/':
      return !session ? <SignIn /> : <Home />
    case '/sign-in':
      return !session ? <SignIn /> : <NotFound />
    case '/sign-up':
      return !session ? <SignUp /> : <NotFound />
    default:
      return <NotFound />
  }
}

export default Routes
