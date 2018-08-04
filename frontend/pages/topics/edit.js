import { Provider } from 'unstated'
import flowRight from 'lodash/flowRight'
import Session from '../../hocs/session'
import isAuthenticated from '../../hocs/is_authenticated'
import redirect from '../../config/redirect'
import { base, Flex, Button } from '../../components/layouts'
import Home from '../../components/layouts/home'
import TopicEdit from '../../components/topics/topic_edit'
import TopicContainer from '../../containers/topic'
import CategoryContainer from '../../containers/category'

let topicContainer = new TopicContainer()
let categoryContainer = new CategoryContainer()

class TopicEditPage extends React.Component {
	static async getInitialProps(ctx) {
		const [ topic, category ] = await Promise.all([
			topicContainer.editTopic(ctx.req, ctx.query.id),
			categoryContainer.fetchCategories(ctx.req)
		])
		
		if (topic.data.topic.user_id !== ctx.session.currentUser.id) {
			redirect('/', ctx)
		}
		
		return { 
			topic: topic.data.topic,
			categories: category.data.categories
		}
	}

	render() {
		const { pageProps: { topic, categories }, url: { query } } = this.props
		topicContainer = new TopicContainer({ topic })
		categoryContainer = new CategoryContainer({ categories })

		return (
			<Home title="Intermates | Edit existing topic">
				<Provider inject={[topicContainer, categoryContainer]}>
					<Flex mx={[1, 1, 1, 4]} flexWrap="wrap">
						<Flex 
							p={2} 
							width={[1, 1, 2/3]} 
							flexDirection="column">
							<TopicEdit query={query} />
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

export default flowRight([Session, isAuthenticated])(TopicEditPage)