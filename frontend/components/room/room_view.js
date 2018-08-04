import { Flex } from '../layouts'
import MessageView from '../messages/message_view'
import MessageNew from '../messages/message_new'
import UserView from '../room/user_view'

const RoomView = ({ roomStore, query }) => {
	const { groupMessagesByDate, fetchPaginatedMessages } = roomStore
	const { state: { messages, users, pagination } } = roomStore

	const handleMessageCreate = (data) => {
  	roomStore.createMessage(data)
  }

  const handleLoadMore = async () => {
  	const lastSeen = messages[0]
  	
  	const response = await fetchPaginatedMessages(query.id, { 
  		last_seen_id: lastSeen.id
  	})

  	if (response.status !== 200) {
			console.log("Something went wrong")
		} else {
			return true
		}
  }

  let moreMessages = false
	
	if (pagination) {
		moreMessages = pagination.total_pages > pagination.page_number
	}

	return (
		<Flex flexWrap="wrap" height="100%">
			<Flex width={[1, 1, 1/4]}>
				<UserView users={users} />
	  	</Flex>
			<Flex width={[1, 1, 3/4]} flexDirection="column">
				<MessageView 
					messagesCount={messages.length}
					onLoadMore={handleLoadMore}
					messages={groupMessagesByDate(messages)} 
					moreMessages={moreMessages}
				/>
				<MessageNew onSubmit={handleMessageCreate} />
			</Flex>
		</Flex>
	)
}

export default RoomView