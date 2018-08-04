import { Provider, Subscribe } from 'unstated'
import flowRight from 'lodash/flowRight'
import Session from '../../hocs/session'
import isAuthenticated from '../../hocs/is_authenticated'
import Home from '../../components/layouts/home'
import RoomView from '../../components/room/room_view'
import RoomContainer from '../../containers/room'

let roomContainer = new RoomContainer()

class RoomShowPage extends React.Component {
	async componentDidMount() {
		const { url: { query }, session, authStore } = this.props

		if (session.auth) {
      const socket = await authStore.connectToSocket()
      roomContainer.connectToChannel(socket, query.id)
    }
	}

	componentWillUnmount() {
    roomContainer.leaveChannel()
    roomContainer.clearMessages()
  }

	render() {
		const { url: { query } } = this.props
		
		return (
			<Provider inject={[roomContainer]}>
				<Home title="Intermates | Category discussion">
					<Subscribe to={[RoomContainer]}>
            {(roomStore) => (
							<RoomView roomStore={roomStore} query={query} />
						)}
          </Subscribe>
				</Home>
			</Provider>
		)
	}
}

export default flowRight([Session, isAuthenticated])(RoomShowPage)