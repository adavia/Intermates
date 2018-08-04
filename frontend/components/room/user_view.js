import styled from 'styled-components'
import { base, Text, Icon } from '../layouts'

const Wrapper = styled(base('div'))`
	background: #FFF;
	flex: 1 0 auto; 
	padding: 1rem;
	@media (min-width: 40em) {
		border-right: 1px solid #DDD;
	}
`

const UserItem = styled(base('div'))`
	background: #f7f7f7;
	padding: 10px;
	border-radius: 3px;
	margin-bottom: 1rem;
	display: flex;
	&:last-child {
		margin-bottom: 0;
	}
`

const displayStatus = (status) => {
	switch(status) {
		case 'active':
			return <Icon my={1} mr={3} color="green" className="fas fa-ellipsis-h" />
		case 'idle':
			return <Icon my={1} mr={3} color="orange" className="fas fa-ellipsis-h" />
		default:
			return <Icon my={1} mr={3} color="grey" className="fas fa-ellipsis-h" />
	}
}

const UserView = ({ users }) => {
	return (
		<Wrapper>
			{users.map(user =>
				<UserItem key={user.id}>
					{displayStatus(user.status)}
					<Text fontWeight={800}>{user.username}</Text>
				</UserItem>
			)}
		</Wrapper>
	)
}

export default UserView

