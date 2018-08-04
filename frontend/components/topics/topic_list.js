import styled from 'styled-components'
import { Subscribe } from 'unstated'
import TopicView from './topic_view'
import TopicContainer from '../../containers/topic'
import AuthContainer from '../../containers/auth'
import Pagination from '../layouts/pagination'
import { Router } from '../../routes'

const Container = styled('div')`
	margin-bottom: 15px;
`

const TopicList = () => {
	const onPageChanged = (data) => {
  	Router.pushRoute(`/topics?page=${data.currentPage}`)
  }

	return(
		<Subscribe to={[TopicContainer, AuthContainer]}>
	    {({ state: { topics, pagination }, toggleTopicLikes }, { state }) => (
	    	<Container>
		    	{topics.map(topic => 
		    		<TopicView 
		    			key={topic.id} 
		    			topic={topic} 
		    			toggleTopicLikes={toggleTopicLikes}  
		    			auth={state} 
		    		/>
		    	)}
		    	<Pagination
            totalRecords={pagination.total_entries}
            pageLimit={pagination.page_size}
            pageNeighbours={pagination.total_pages}
            pageNumber={pagination.page_number}
            onPageChanged={onPageChanged}
          />
	    	</Container>
	    )}
	  </Subscribe>
	)
}

export default TopicList