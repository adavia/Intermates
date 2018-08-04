import { Provider } from 'unstated'
import flowRight from 'lodash/flowRight'
import Session from '../../hocs/session'
import isAuthenticated from '../../hocs/is_authenticated'
import { base, Flex, Button } from '../../components/layouts'
import Home from '../../components/layouts/home'
import TopicNew from '../../components/topics/topic_new'
import CategoryContainer from '../../containers/category'

let categoryContainer = new CategoryContainer()

class TopicNewPage extends React.Component {
	static async getInitialProps(ctx) {
    const resp = await categoryContainer.fetchCategories(ctx.req)
    
    return { 
    	categories: resp.data.categories
    }
	}

	render() {
		const { pageProps: { categories } } = this.props
		categoryContainer = new CategoryContainer({ categories })

		return (
			<Home title="Intermates | Create new topic">
				<Provider inject={[categoryContainer]}>
					<Flex mx={[1, 1, 1, 4]} flexWrap="wrap">
						<Flex 
							p={2} 
							width={[1, 1, 2/3]} 
							flexDirection="column">
							<TopicNew />
						</Flex>
						<Flex 
							p={2} 
							width={[1, 1, 1/3]} 
							flexDirection="column">
				  	</Flex>
					</Flex>
				</Provider>
			</Home>
		)
	}
}

export default flowRight([Session, isAuthenticated])(TopicNewPage)