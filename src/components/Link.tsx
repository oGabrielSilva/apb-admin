import React, { CSSProperties, ReactNode, useContext } from 'react'
import { ApolloContext, TPath } from '../context/Apollo'

interface ILinkProps {
  children: ReactNode
  to: TPath
  style: CSSProperties
}

function Link({ children, to, style }: ILinkProps) {
  const { handleDispathPath } = useContext(ApolloContext)

  return (
    <span>
      <a
        href={to}
        style={style}
        onClick={(event) => {
          event.preventDefault()
          handleDispathPath(to)
        }}
      >
        <span style={style}>{children}</span>
      </a>
    </span>
  )
}

export default Link
