import styled from 'styled-components'
import moment from 'moment'
import includes from 'lodash/includes'
import debounce from 'lodash/debounce'

import MessageItem from './message_item'

const Wrapper = styled('div')`
	flex: 1 0 auto;
	height: 250px; 
	overflow-y: auto;
	background: #FFF;
	padding: 1rem;
`

const ContentDivider = styled('div')``

const Divider = styled('div')`
	position: relative;
  margin: 1rem 0;
  text-align: center;
  &:after {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    height: 1px;
    background: rgb(240,240,240);
    content: "";
  }
`

const TextDivider = styled('span')`
	z-index: 1;
  position: relative;
  background: #FFF;
  padding: 0 12px;
`

class MessageView extends React.Component {
	constructor(props) {
    super(props)
    this.handleScroll = debounce(this.handleScroll, 200)

    this.setWrapper = (el) => this.wrapper = el
  }

  componentDidMount() {
    this.wrapper.addEventListener('scroll', this.handleScroll)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.messagesCount < this.props.messagesCount) {
      return this.wrapper.scrollHeight - this.wrapper.scrollTop
    }

    return null
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.wrapper.scrollTop = this.wrapper.scrollHeight - snapshot
    }
  }

  componentWillUnmount() {
    this.wrapper.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
  	if (this.props.moreMessages && this.wrapper.scrollTop < 20) {
      this.props.onLoadMore()
    }
  }

  renderMessages = (messages) => {
    return messages.map((message) => <MessageItem key={message.id} message={message} />)
  }

	render() {
    const { messages } = this.props
    const today = moment().format('MMMM Do')
    const yesterday = moment().subtract(1, 'days').format('MMMM Do')

		return (
			<Wrapper innerRef={this.setWrapper}>
				{messages.map((day) =>
          <ContentDivider key={day.date}>
            <Divider>
              <TextDivider>
                {day.date === today && 'Today'}
                {day.date === yesterday && 'Yesterday'}
                {!includes([today, yesterday], day.date) && day.date}
              </TextDivider>
            </Divider>
            {this.renderMessages(day.messages)}
          </ContentDivider>
        )}
			</Wrapper>
		)
	}
}

export default MessageView