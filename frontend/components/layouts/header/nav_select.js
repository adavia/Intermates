import { Icon, SubMenu } from '../'

class NavSelect extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			toggleMenu: false
		}

		this.setSelectWrapper = (el) => this.selectWrapper = el
	}

  componentWillUnmount(){
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  displayMenu = () => {
    if (this.selectWrapper && !this.state.toggleMenu) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.setState(prevState => ({
       toggleMenu: !prevState.toggleMenu
    }))
  }

  handleOutsideClick = (e) => {
    if (this.selectWrapper.contains(e.target)) {
      return
    }

    this.displayMenu()
  }

	render() {
		const { children } = this.props
		const { toggleMenu } = this.state

		return (
			<React.Fragment>
				<Icon 
          ml={2} 
         	onClick={this.displayMenu}
          color="primary" 
          className="fas fa-chevron-down" 
        />
				<SubMenu innerRef={this.setSelectWrapper} display={toggleMenu ? "block" : "none"}>
		    	{children}
		    </SubMenu>
	    </React.Fragment>
		)
	}
}

export default NavSelect