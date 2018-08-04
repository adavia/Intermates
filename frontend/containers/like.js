import { Container } from 'unstated'
import { toggleLike } from '../actions/like'

class LikeContainer extends Container {
	toggleLike = async(topic_id) => {
		try {
			const resp = await toggleLike(topic_id)
			return resp
		} catch ({ resp }) {
			return resp
		}
	}
}

export default LikeContainer