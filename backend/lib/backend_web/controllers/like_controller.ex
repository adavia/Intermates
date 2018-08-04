defmodule BackendWeb.LikeController do
	use BackendWeb, :controller

	alias Backend.Discussions

	plug BackendWeb.Plugs.IsAuth when action in [:create]

	def create(conn, %{"topic_id" => topic_id}) do
		topic = Discussions.get_topic(topic_id)
		current_user = conn.assigns.current_user

		with nil <- Discussions.is_liked?(topic, current_user) do
	    Discussions.create_like(topic.id, current_user)
	    conn 
	    |> put_status(:ok)
	    |> render(BackendWeb.TopicView, "show.json", topic: topic)
	  else
	  	like -> Discussions.delete_like(like, topic.id)
	    conn 
	    |> put_status(:ok)
	    |> render(BackendWeb.TopicView, "show.json", topic: topic)
	  end
	end
end