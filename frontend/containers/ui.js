import { Container } from 'unstated'

class UIContainer extends Container {
	constructor(props) {
		super(props)

		this.initialState = {
			modal: {
				show: false,
				content: null
			}
		}

		this.state = this.initialState
	}

	toggleModal = (body = null) => {
		this.setState(prevState => ({
    	modal: {
    		...prevState.modal,
        show: !prevState.modal.show,
        content: body
    	}
		}))
	}
}

export default UIContainer