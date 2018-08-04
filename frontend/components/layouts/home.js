import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import { Subscribe } from 'unstated'
import NProgress from 'nprogress'
import { Router } from '../../routes'
import theme from '../../themes'
import Header from './header'
import UIContainer from '../../containers/ui'
import AuthContainer from '../../containers/auth'

const Wrapper = styled.div`
  min-height: 100vh;
  @media (min-width: 40em) {
  	display: grid;
    grid-template-areas: 
    	"header sidebar"
      "content sidebar"
      "footer sidebar";
    grid-template-rows: auto 1fr 50px;
    grid-template-columns: 1fr 200px;
	}
`

const Aside = styled.aside`
	grid-area: sidebar;
  background: linear-gradient(to right, #ffb347, #ffcc33);
  opacity: 0.8;
`

const Main = styled.main`
	grid-area: content;
	@media (min-width: 40em) {
		grid-column: 1 / span 3;
	}
`

const Footer = styled.footer`
	grid-area: footer;
  text-align: center;
  background: #878a8c;
  color: #FFF;
  padding: 10px;
  @media (min-width: 40em) {
		grid-column: 1 / span 3;
	}
`

Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Home = ({ children, title }) => {
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Subscribe to={[UIContainer, AuthContainer]}>
					{(uiStore, authStore) => (
						<Wrapper>
							<Header 
								authStore={authStore}
								uiStore={uiStore} 
							/>
							<Main>
								{children}
							</Main>
							<Footer>INTERMATES</Footer>
							{uiStore.state.modal.content}
						</Wrapper>
					)}
				</Subscribe>
			</ThemeProvider>
		</React.Fragment>
	)
}

export default Home