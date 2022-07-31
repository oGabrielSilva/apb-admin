class Env {
  private constructor() {}

  public static isDevMode = true

  public static baseDev = 'https://test-apollo-api-admin.herokuapp.com'

  public static baseDevAccount = this.baseDev.concat('/account')
}

export default Env
