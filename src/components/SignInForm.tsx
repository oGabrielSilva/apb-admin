import React, {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import Account from '../api/Account'
import { ApolloContext } from '../context/Apollo'
import Colors from '../utils/Colors'
import Margins from '../utils/Margins'
import Validation from '../utils/Validation'
import Link from './Link'
import Loading from './Loading'

interface IStyle {
  input: CSSProperties
  btnCheckbox: CSSProperties
  checkbox: CSSProperties
  checkboxCheck: CSSProperties
  submitBtn: CSSProperties
}

const styles: IStyle = {
  input: {
    borderBottom: `1px solid ${Colors.variant}`,
    background: 'transparent',
    padding: Margins.inputPadding,
    width: '100%',
    marginTop: Margins.margin,
  },
  btnCheckbox: {
    background: Colors.bg,
    cursor: 'pointer',
  },
  checkbox: {
    width: Margins.margin / 1.5,
    height: Margins.margin / 1.5,
    border: `1px solid ${Colors.variant}`,
    color: Colors.dark,
    transition: '0.4s ease',
  },
  checkboxCheck: {
    background: Colors.variant,
  },
  submitBtn: {
    background: Colors.variant,
    width: '100%',
    padding: Margins.buttonPadding[0],
    borderRadius: Margins.radius.long,
    marginTop: Margins.margin * 2,
    cursor: 'pointer',
    transition: '0.5s ease',
  },
}

function SignInForm() {
  const { isMobile, handleStorageSignIn, handleAlert } =
    useContext(ApolloContext)
  const [remember, setRemember] = useState(true)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (email && password) {
      setButtonDisabled(
        !(Validation.email(email) && Validation.password(password))
      )
    } else setButtonDisabled(true)
  }, [email, password])

  const handleSignIn = useCallback(() => {
    if (!email || !password) {
      handleAlert('Oopss...', 'Check all fields')
      return
    }
    setButtonDisabled(true)
    setLoading(true)
    Account.signIn({ email, password })
      .then((response) => {
        setLoading(false)
        if (response.data && response.data.session) {
          handleStorageSignIn(response.data, remember)
          handleAlert(
            'Success',
            `Welcome to the Apollo Admin, ${response.data.user.name as string}`
          )
        }
      })
      .catch((error) => {
        setLoading(false)
        setButtonDisabled(false)
        handleAlert(
          'Oopss... some error happened',
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            ''
        )
      })
  }, [email, password, remember])

  return (
    <div
      style={{
        width: (isMobile && '100%') || '70%',
        marginTop: Margins.margin,
      }}
    >
      <input
        style={styles.input}
        type="email"
        ref={emailRef}
        onChange={() => setEmail(emailRef.current?.value)}
        placeholder="E-mail"
      />
      <input
        style={styles.input}
        type="password"
        ref={passwordRef}
        onChange={() => setPassword(passwordRef.current?.value)}
        placeholder="Senha"
      />
      <div
        style={{
          display: 'flex',
          marginTop: Margins.margin,
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            style={styles.btnCheckbox}
            onClick={() => setRemember((v) => !v)}
          >
            {(remember && (
              <div style={{ ...styles.checkbox, ...styles.checkboxCheck }}>
                &#10004;
              </div>
            )) || <div style={styles.checkbox} />}
          </button>
          <span style={{ marginLeft: Margins.margin / 3 }}>Remember</span>
        </div>
      </div>
      <button
        disabled={buttonDisabled}
        type="button"
        style={styles.submitBtn}
        onClick={() => handleSignIn()}
      >
        <span style={{ fontWeight: 700, color: Colors.dark }}>Sign in</span>
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: Margins.margin,
        }}
      >
        <p>don&apos;t have an account?</p>
        <Link
          to="/sign-up"
          style={{
            color: Colors.link,
            textDecoration: 'none',
            marginLeft: Margins.margin / 4,
          }}
        >
          Sign up
        </Link>
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default SignInForm
