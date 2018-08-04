import { Provider } from 'unstated'
import { getCookie } from '../config/cookie'
import AuthContainer from '../containers/auth'

let authContainer = new AuthContainer()

export default (WrappedPage) => {
  return class extends React.Component {
    static async getInitialProps(ctx) {
      let pageProps, session = {}
      const token = getCookie('token', ctx.req)

      if (token) {
        const resp = await authContainer.authenticateUser(ctx.req)

        if (resp.status === 200) {
          session = { 
            auth: true,
            currentUser: resp.data.user 
          }
        }
      }

      ctx.session = session

      if (WrappedPage.getInitialProps) {
        pageProps = await WrappedPage.getInitialProps(ctx)
      }

      return { pageProps, session }
    }
    
    render() {
      const { auth, currentUser } = this.props.session
      authContainer = new AuthContainer({ auth, currentUser })

      return (
        <Provider inject={[authContainer]}>
          <WrappedPage {...this.props} authStore={authContainer} />
        </Provider>
      )
    }
  }
}