defmodule BackendWeb.TopicController do
	use BackendWeb, :controller
	
	alias Backend.Discussions

	plug BackendWeb.Plugs.IsAuth when not action in [:index]
	plug :check_topic_owner when action in [:update, :delete]

	def index(conn, params) do
		current_user = conn.assigns.current_user
		page = Discussions.list_topics(params)
		topic_likes = Discussions.liked_topics(page.entries, current_user) 
		render(conn, "index.json", topics: page.entries, likes: topic_likes, page: page)
	end

	def show(conn, %{"id" => id}) do
		topic = Discussions.get_topic(id, [:user, :categories])
		render(conn, "show.json", topic: topic)
	end

	def create(conn, params) do
		topic = Ecto.build_assoc(conn.assigns.current_user, :topics)

		case Discussions.create_topic(topic, params) do
			{:ok, topic} ->
				conn
				|> put_status(:created)
				|> render("create.json", topic: topic)
			{:error, changeset} ->
				conn
				|> put_status(:unprocessable_entity)
				|> render(BackendWeb.ErrorView, "error.json", changeset: changeset)
		end
	end

	def edit(conn, %{"id" => id}) do
		topic = Discussions.get_topic(id, [:user, :categories])
		render(conn, "edit.json", topic: topic)
	end

	def update(conn, %{"id" => id} = params) do
		topic = Discussions.get_topic(id, [:categories])

		case Discussions.update_topic(topic, params) do
		  {:ok, _topic} ->
		  	conn
		  	|> put_status(:ok)
		  	|> render("update.json", topic: topic)
		  {:error, changeset} ->
        conn
				|> put_status(:unprocessable_entity)
				|> render(BackendWeb.ErrorView, "error.json", changeset: changeset)
		end
	end

	def delete(conn, %{"id" => id}) do
    topic = Discussions.get_topic(id)
    {:ok, topic} = Discussions.delete_topic(topic)

    conn
    |> put_status(:ok)
    |> render("show.json", topic: topic)
  end

  defp check_topic_owner(%{params: %{"id" => topic_id}} = conn, _params) do
  	user_id = conn.assigns.current_user.id

		if Discussions.get_topic(topic_id, [:user]).user_id == user_id do
			conn
		else
			conn
			|> put_status(:forbidden)
    	|> render(BackendWeb.ErrorView, "forbidden.json")
    	|> halt
		end
	end
end