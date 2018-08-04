import styled from 'styled-components'
import { Subscribe } from 'unstated'
import { EditorState, convertFromRaw } from 'draft-js'
import { base, Flex, Icon, Text } from '../layouts'
import Link from '../layouts/link'
import { Router } from '../../routes'
import LikeContainer from '../../containers/like'

import TopicContent from './topic_content'

const TopicItem = styled(Flex)`
  color: #878a8c;
  background: #FFF;
  margin-bottom: 15px;
  fill: #878a8c;
  cursor: pointer;
  overflow: hidden;
  box-shadow: none;
  border-radius: 3px;
  border: 1px solid #DDD;
  padding: 0;
  &:last-child {
  	margin-bottom: 0;
  }
`

const Reactions = styled(base('div'))`
  color: #878a8c;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`

const Content = styled(base('div'))`
	display: block;
`

const Categories = ({ categories }) => {
	return categories.map((c, i) =>
		<Link key={c.id} route={`/rooms/${c.id}`}>
			<span>{!!i && ", "}{c.title}</span>
		</Link>
	)
}

const TopicView = ({ topic, toggleTopicLikes, auth }) => {
	const { categories } = topic
	const content = JSON.parse(topic.content)

	const toggleLike = (topic, likeStore) => async(e) => {
		if (auth.auth) {
			const resp = await likeStore.toggleLike(topic.id)
			
			if (resp.status === 200) {
				toggleTopicLikes(topic)
			}
		}
	}

	return (
		<Subscribe to={[LikeContainer]}>
			{(likeStore) => (
				<TopicItem>
					<Reactions p={2}>
						<Icon 
							onClick={toggleLike(topic, likeStore)}
							fontSize="17px" 
							color="grey" 
							className={`${topic.liked ? "fas" : "far"} fa-heart`}>
						</Icon>
						<Text 
							fontSize={13} 
							fontWeight="bold" 
							color="#222" 
							m={1}>
							{topic.likes_count}
						</Text>
					</Reactions>
					<Content py={1} px={2} width={1}>
						<Flex>
							<Text 
								fontSize={14} 
								fontWeight="bold" 
								color="#222">
								<Categories categories={categories} />
							</Text>
							<Text 
								fontSize={13} 
								ml={2} 
								color="#9b9b9b">
								Posted by u/{topic.user.username}
							</Text>
							{topic.user.id === auth.currentUser.id &&
								<Text ml="auto">
									<Link route={`/topics/${topic.id}/edit`}>
										<Icon ml="auto" fontSize="14px" color="grey" className="fas fa-edit"></Icon>
									</Link>
								</Text>
							}
						</Flex>
						<TopicContent 
							editorState={EditorState.createWithContent(convertFromRaw(content))} 
						/>
					</Content>
				</TopicItem>
			)}
		</Subscribe>
	)
}

export default TopicView