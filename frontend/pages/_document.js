import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  html, body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    padding: 0;
    background-color: #DDD;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
  }
  #nprogress .bar {
    background: #E5906D;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1031;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export default class Page extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,900" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
