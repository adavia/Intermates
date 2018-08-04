import styled from 'styled-components'
import { Subscribe } from 'unstated'
import { Router } from '../../routes'
import Login from '../auth/login'
import UIContainer from '../../containers/ui'
import AuthContainer from '../../containers/auth'

const Wrapper = styled('a')``

const Link = ({ route, children,  }) => {
  const handleClick = (uiStore, authStore) => (e) => {
    e.preventDefault()
    const { toggleModal } = uiStore
    const { auth } = authStore.state
    
    if (auth) {
      Router.pushRoute(route)
    } else {
      toggleModal(<Login toggleModal={toggleModal} forwardRoute={route} />)
    }
  }

  return (
    <Subscribe to={[UIContainer, AuthContainer]}>
      {(uiStore, authStore) => (
        <Wrapper onClick={handleClick(uiStore, authStore)}>
          {children}
        </Wrapper>
      )}
    </Subscribe>
  )
}

export default Link