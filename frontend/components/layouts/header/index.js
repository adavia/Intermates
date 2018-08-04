import styled from 'styled-components'
import { base, Icon, Text, Button, Image } from '../'
import { Router } from '../../../routes'
import Link from '../link'
import Login from '../../../components/auth/login'
import UserNew from '../../../components/users/user_new'
import NavSelect from './nav_select'

const Navigation = styled.header`
	grid-area: header;
  @media (min-width: 40em) {
		grid-column: 1 / span 3;
	}
`

const Menu = styled(base('ul'))`
	list-style: none;
  padding-right: 0;
  padding-left: 0;
	display: flex;
	flex-direction: column;
	margin: 0;
	border-bottom: 1px solid rgb(237, 239, 241);
  background-color: rgb(255, 255, 255);
	@media (min-width: 40em) {
		flex-direction: row;
		align-items: center;
	}
`

const SubItem = styled(base('li'))`
  @media (max-width: 40em) {
    padding: 8px 0;
    border-bottom: none;
    &:last-child {
      padding-bottom: 0;
    }
  }
  width: 100%;
  padding: 0.7rem;
  color: #222;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  border-bottom: 1px solid rgba(0,0,0,.15);
  background-color: transparent;
  &:last-child {
    border-bottom: none;
  }
`

const InfoMenu = styled(base('div'))``

const Collapsible = styled(base('ul'))`
	list-style: none;
  padding-right: 0;
  padding-left: 0;
	@media (max-width: 40em) {
		display: ${props => props.display};
    border-top: 1px solid rgb(237, 239, 241);
    padding: 0;
  }
	@media (min-width: 40em) {
    display: contents;
  }
`

const Item = styled(base('li'))`
	font-weight: 800;
	padding: 0 16px;
	@media (max-width: 40em) {
		padding: 8px 16px;
	}
`

const InputHeader = styled.input`
  box-shadow: none;
  color: rgb(28, 28, 28);
  background-color: rgb(255, 255, 255);
  border-width: initial;
  border-style: none;
  font-size: 14px;
  outline: none;
  width: 180px;
`

const Toggle = styled.div`
  margin-left: auto;
  margin-top: 5px;
  float: right;
  @media (min-width: 600px) {
    display: none;
  }
`

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showMenu: false
		}
	}

	displayMenu = () => {
		this.setState(prevState => ({
    	showMenu: !prevState.showMenu
    }))
  }

  toggleLoginModal = (modal) => {
  	const { toggleModal } = this.props.uiStore
  	toggleModal(<Login toggleModal={toggleModal} />)
  }

  toggleUserNewModal = (modal) => {
    const { toggleModal } = this.props.uiStore
    toggleModal(<UserNew toggleModal={toggleModal} />)
  }

  logout = async () => {
    const { state: { currentUser }, logout } = this.props.authStore
    const resp = await logout(currentUser.id)

    if (resp.status !== 204) {
      console.log("Something went wrong")
    } else {
      Router.pushRoute("/")
    }
  }

  isAuthenticated = () => {
    const { state } = this.props.authStore
    
    if (!state.auth) {
      return (
        <Item>
          <Button
          	width="125px"
            onClick={this.toggleLoginModal} 
            children="LOG IN"
          />
          <Button
            width="125px"
            ml={2}
            onClick={this.toggleUserNewModal} 
            children="REGISTER"
          />
        </Item>
      )
    } else {
      return (
        <Item color="grey">
          <Icon mr={2} color="primary" className="fas fa-user" />
          Hello, {state.currentUser.email}
          <NavSelect>
            <SubItem>
              <Icon mr={2} color="primary" className="fas fa-cog" />
              Configuration
            </SubItem>
            <SubItem onClick={this.logout}>
              <Icon mr={2} color="primary" className="fas fa-sign-out-alt" />
              Sign Out
            </SubItem>
          </NavSelect>
        </Item>
      );
    }
  }

	render() {
		const { showMenu } = this.state 

		return (
			<Navigation>
				<Menu fontSize={1} py={[0, 2]}>
					<Item>
						<Toggle>
	            {!showMenu ? (
	              <Icon 
	                fontSize="20px" 
	                color="grey"
	                onClick={this.displayMenu} 
	                className="fas fa-bars" />
	            ) : (
	              <Icon
	                fontSize="20px"
	                color="grey" 
	                onClick={this.displayMenu} 
	                className="fas fa-times" />
	            )}
	          </Toggle>
	          <Link route="/">
              <Image width={[80, 100]} src="/static/intermates_nav.png" />
            </Link>
					</Item>
					<Collapsible display={showMenu ? "block" : "none"}>
						<Item>
							<Icon mr={2} color="primary" className="fas fa-fire" />Popular
						</Item>
						<Item mr="auto">
							<Icon mr={2} color="primary" className="fas fa-search" />
	            <InputHeader placeholder="Find a discussion or a user" />
						</Item>
						{this.isAuthenticated()}
					</Collapsible>
				</Menu>
				<InfoMenu p={2} bg="#FFF" borderBottom='1px solid #DDD'>
	    		<Text mx={[1, 1, 4]} fontSize={14} fontWeight="bold" color="black">
	     			Half of the emotion is already cleared out. Check and see how is this suppose to change.
	    		</Text>
    		</InfoMenu>
			</Navigation>
		)
	}
}

export default Header