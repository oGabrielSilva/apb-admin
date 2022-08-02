class Env {
  private constructor() {}

  public static isDevMode = true

  public static baseDev = 'https://apb-admin-api.herokuapp.com'

  public static baseDevAccount = this.baseDev.concat('/account')
}

export default Env
