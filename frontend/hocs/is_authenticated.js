import redirect from '../config/redirect'

export default (WrappedPage) => {
  return class extends React.Component {
    static async getInitialProps(ctx) {
      if (!ctx.session || !ctx.session.auth) {
        redirect('/', ctx)
      }
      
      const props = WrappedPage.getInitialProps ? await WrappedPage.getInitialProps(ctx) : {}
      
      return props
    }

    render() {
      return (
        <WrappedPage {...this.props} />
      )
    }
  }
}