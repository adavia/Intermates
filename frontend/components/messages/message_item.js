import styled from 'styled-components'
import { base, Text, Icon } from '../layouts'

const Wrapper = styled(base('div'))`
	padding: 10px;
	margin-bottom: 10px;
	&:first-child {
		padding-top: 0;
	}
	&:last-child {
		margin-bottom: 0;
	}
`

const renderIcon = (status) => {
	switch(status) {
		case "active":
			return <Icon mr={2} color="primary" className="fas fa-sign-in-alt" />
		case "idle":
			return <Icon mr={2} color="primary" className="far fa-clock" />
		case "gone":
			return <Icon mr={2} color="primary" className="fas fa-sign-out-alt" />
	}
}
	
const MessageItem = ({ message }) => {
	if (!message.status) {
		return (
			<Wrapper bg="#f5f5f5">
				<Text  
					mb={1} 
					mt={0} 
					color="black" 
					fontWeight={800}>
					{message.user.username} said:
				</Text>
				{message.content}
			</Wrapper>
		)
	} else {
		return (
			<Wrapper bg="#f8f8f8">
				<Text mb={1} fontWeight={800} color="grey">
					{renderIcon(message.status)} {message.user.username} {message.content}
				</Text>
			</Wrapper>
		)
	}
}

export default MessageItem