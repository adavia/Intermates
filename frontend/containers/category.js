import { Container } from 'unstated'
import { fetchCategories } from '../actions/category'

class CategoryContainer extends Container {
	constructor(props = {}) {
		super(props)

		this.initialState = {
			categories: props.categories || [],
		}
		
		this.state = this.initialState
	}

	fetchCategories = async(req) => {
		try {
			const resp = await fetchCategories(req)
			this.setState({ categories: resp.data.categories })
			return resp
		} catch ({ resp }) {
			return resp
		}
	}
	
	reset = () => {
		this.setState({ categories: [] })
	}
}

export default CategoryContainer