import axios from 'axios'
import Env from '../config/Env'

interface IBodySignIn {
  email: string
  password: string
}

interface IBodySignUp extends IBodySignIn {
  name: string
  lastName: string
  avatar?: File
}

class Account {
  private base: string

  private constructor(route: string) {
    this.base = ((Env.isDevMode && Env.baseDevAccount) || '').concat(route)
  }

  public static async signIn(body: IBodySignIn) {
    const account = new Account('/signin')
    return axios({
      method: 'post',
      url: account.base,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    })
  }

  public static async signUp(body: IBodySignUp) {
    const account = new Account('/signup')

    return axios({
      method: 'post',
      url: account.base,
      data: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export default Account
