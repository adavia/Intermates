import styled from 'styled-components'
import { Provider } from 'unstated'
import flowRight from 'lodash/flowRight'
import Session from '../hocs/session'
import { base, Flex, Button } from '../components/layouts'
import Link from '../components/layouts/link'
import Home from '../components/layouts/home'
import TopicList from '../components/topics/topic_list'
import TopicContainer from '../containers/topic'

let topicContainer = new TopicContainer()

const Panel = styled(base('div'))``

const PanelTop = styled(base('div'))`
	background-color: #E5906D;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	height: 100px;
`

const PanelContent = styled(base('div'))`
	background-color: #FFF;
	text-align: center;
	padding: 12px;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
`

class IndexPage extends React.Component {
	static async getInitialProps(ctx) {
		const resp = await topicContainer.fetchTopics(ctx.req, ctx.query)
		
		return { 
			topics: resp.data.topics,
			pagination: resp.data.pagination
		}
	}

	render() {
		const { pageProps: { topics, pagination } } = this.props 
		topicContainer = new TopicContainer({ topics, pagination })
		
		return (
			<Home title="Intermates | Topics">
				<Provider inject={[topicContainer]}>
	      	<Flex mx={[1, 1, 1, 4]} flexWrap="wrap">
	      		<Flex 
	      			p={2} 
	      			width={[1, 1, 2/3]} 
	      			order={[2, 2, 1]} 
	      			flexDirection="column">
							<TopicList />
	      		</Flex>
	      		<Flex p={2} 
	      			width={[1, 1, 1/3]} 
	      			order={[1, 1, 2]} 
	      			flexDirection="column">
	      			<Panel>
		      			<PanelTop />
		      			<PanelContent>
		      				<Link route="/topics/new">
		      					<Button>Create new topic</Button>
		      				</Link>
		      			</PanelContent>
		      		</Panel>
	      		</Flex>
	      	</Flex>
        </Provider>
      </Home>
		)
	}
}

export default flowRight([Session])(IndexPage)