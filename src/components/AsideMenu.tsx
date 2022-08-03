import React, { CSSProperties, useContext } from 'react'
import { ApolloContext } from '../context/Apollo'
import { TScreens } from '../pages/Home'
import Colors from '../utils/Colors'
import Margins from '../utils/Margins'

interface IAsideMenuProps {
  screen: TScreens
  expanded: boolean
  setScreen: (value: TScreens) => void //eslint-disable-line
}

const styles: { button: CSSProperties } = {
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: Margins.padding / 3,
    paddingLeft: Margins.padding,
    borderTopRightRadius: Margins.radius.long,
    borderBottomRightRadius: Margins.radius.long,
    cursor: 'pointer',
    fontWeight: 700,
    background: Colors.bg,
    transition: '0.5s ease',
    marginTop: Margins.margin / 3,
  },
}

function AsideMenu({ expanded, screen, setScreen }: IAsideMenuProps) {
  const { handleSignOut } = useContext(ApolloContext)

  return (
    <div
      style={{
        transition: '0.5s ease',
        position: 'fixed',
        display: 'flex',
        height: '100vh',
        background: Colors.bg,
        left: expanded ? 0 : -300,
        top: 0,
      }}
    >
      <aside
        style={{
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            padding: Margins.padding,
            paddingBottom: 0,
            textAlign: 'center',
          }}
        >
          <h1>
            Apollo
            <span style={{ color: Colors.variant }}>Dashboard</span>
          </h1>
        </div>
        <div
          style={{
            marginTop: Margins.margin,
            paddingRight: Margins.padding / 2,
            width: '100%',
          }}
        >
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'New' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('New')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'New' && Colors.text) || Colors.third,
              }}
            >
              add_circle
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'New' && Colors.text) || Colors.third,
              }}
            >
              Write post
            </span>
          </button>
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'Analytics' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('Analytics')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'Analytics' && Colors.text) || Colors.third,
              }}
            >
              donut_large
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'Analytics' && Colors.text) || Colors.third,
              }}
            >
              Analytics
            </span>
          </button>
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'Posts' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('Posts')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'Posts' && Colors.text) || Colors.third,
              }}
            >
              {(screen === 'Posts' && 'folder_open') || 'folder'}
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'Posts' && Colors.text) || Colors.third,
              }}
            >
              Posts
            </span>
          </button>
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'Category' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('Category')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'Category' && Colors.text) || Colors.third,
              }}
            >
              category
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'Category' && Colors.text) || Colors.third,
              }}
            >
              Category
            </span>
          </button>
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'Tags' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('Tags')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'Tags' && Colors.text) || Colors.third,
              }}
            >
              sell
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'Tags' && Colors.text) || Colors.third,
              }}
            >
              Tags
            </span>
          </button>
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'Mail' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('Mail')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'Mail' && Colors.text) || Colors.third,
              }}
            >
              {(screen === 'Mail' && 'drafts') || 'mail'}
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'Mail' && Colors.text) || Colors.third,
              }}
            >
              Mail
            </span>
          </button>
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'Accounts' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('Accounts')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'Accounts' && Colors.text) || Colors.third,
              }}
            >
              supervised_user_circle
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'Accounts' && Colors.text) || Colors.third,
              }}
            >
              Accounts
            </span>
          </button>
          <button
            type="button"
            style={{
              ...styles.button,
              ...(screen === 'MyAccount' && {
                background: Colors.variantAlpha,
                borderLeft: `5px solid ${Colors.variant}`,
              }),
            }}
            onClick={() => setScreen('MyAccount')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: (screen === 'MyAccount' && Colors.text) || Colors.third,
              }}
            >
              account_circle
            </span>
            <span
              style={{
                marginLeft: 10,
                color: (screen === 'MyAccount' && Colors.text) || Colors.third,
              }}
            >
              Profile
            </span>
          </button>
        </div>
        <div style={{ width: '100%', marginTop: 'auto' }}>
          <button
            type="button"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: Colors.bg,
              padding: Margins.padding / 3,
              textAlign: 'center',
              width: '100%',
              cursor: 'pointer',
            }}
            onClick={handleSignOut}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: Colors.red,
                marginRight: Margins.margin / 2,
              }}
            >
              logout
            </span>
            <span
              style={{
                color: Colors.text,
                marginRight: Margins.margin / 2,
                fontWeight: 500,
              }}
            >
              Sign out
            </span>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default AsideMenu
