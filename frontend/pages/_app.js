import App, { Container } from 'next/app'

class Intermates extends App {
  createUrl = (router) => {
    // This is to make sure we don't references the router object at call time
    const { pathname, asPath, query } = router
    return {
      get query() {
        return query
      },
      get pathname() {
        return pathname
      },
      get asPath() {
        return asPath
      },
      back: () => {
        router.back()
      },
      push: (url, as) => router.push(url, as),
      pushTo: (href, as) => {
        const pushRoute = as ? href : null
        const pushUrl = as || href

        return router.push(pushRoute, pushUrl)
      },
      replace: (url, as) => router.replace(url, as),
      replaceTo: (href, as) => {
        const replaceRoute = as ? href : null
        const replaceUrl = as || href

        return router.replace(replaceRoute, replaceUrl)
      }
    }
  }

  render () {
    const { Component, pageProps, router } = this.props
    const url = this.createUrl(router)
    
    return (
      <Container>
        <Component url={url} {...pageProps} />
      </Container>
    )
  }
}

export default Intermates