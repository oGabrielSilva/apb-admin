import React, { useContext } from 'react'
import { ApolloContext } from '../context/Apollo'
import Colors from '../utils/Colors'
import Margins from '../utils/Margins'

interface INavBarProps {
  expandedAside: boolean
  setExpandedAside: (value: boolean) => void //eslint-disable-line
}

function NavBar({ expandedAside, setExpandedAside }: INavBarProps) {
  const { userInfo } = useContext(ApolloContext)

  return (
    <div>
      <nav
        style={{
          transition: '0.5s ease',
          height: 70,
          background: Colors.bg,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...(expandedAside ? { paddingLeft: 250 } : {}),
        }}
      >
        <button
          type="button"
          onClick={() => setExpandedAside(!expandedAside)}
          style={{ background: Colors.bg, cursor: 'pointer' }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              transition: '0.5s ease',
              color: Colors.text,
              transform: expandedAside ? '' : 'rotate(360deg)',
            }}
          >
            menu
          </span>
        </button>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <a
              href="/my-account"
              style={{
                borderRadius: Margins.radius.long,
                width: 35,
                height: 35,
                cursor: 'pointer',
              }}
            >
              <img
                width={35}
                height={35}
                src={userInfo?.avatar || '/avatar.png'}
                alt={userInfo?.name}
                style={{
                  borderRadius: Margins.radius.long,
                  border: `1px solid ${Colors.third}`,
                }}
              />
            </a>
            <div
              style={{
                marginLeft: Margins.margin / 2,
                marginRight: Margins.margin,
              }}
            >
              <a href="/my-account" style={{ textDecoration: 'none' }}>
                <span
                  style={{
                    color: Colors.text,
                    textDecoration: 'none',
                    fontWeight: '700',
                  }}
                >
                  {userInfo?.name}
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
