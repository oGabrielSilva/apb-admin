import React from 'react'
import Colors from '../utils/Colors'

function Loading() {
  return (
    <div
      className="activity"
      style={{
        width: 30,
        height: 30,
        borderColor: Colors.text,
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
      }}
    />
  )
}

export default Loading
