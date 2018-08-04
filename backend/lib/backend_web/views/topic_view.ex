defmodule BackendWeb.TopicView do
	use BackendWeb, :view

	def render("index.json", %{topics: topics, likes: likes, page: page}) do
		%{
    	topics: render_many(topics, likes),
    	pagination: BackendWeb.PaginationView.paginate(page)
    }
	end

	def render("show.json", %{topic: topic}) do
		%{
    	topic: render_one(topic)
    }
	end

	def render("edit.json", %{topic: topic}) do
		%{
	    topic: %{
	    	id: topic.id,
	    	content: topic.content,
	    	user_id: topic.user_id,
	    	categories: render_categories(topic.categories),
	    	inserted_at: topic.inserted_at
	    }
	  }
	end

	def render("create.json", %{topic: topic}) do
		%{
    	id: topic.id
    }
	end

	def render("update.json", %{topic: topic}) do
		%{
    	id: topic.id
    }
	end

	def render_many(topics, likes) do
  	Enum.map(topics, fn topic -> render_one(topic, likes) end)
	end

	def render_one(topic, likes \\ []) do
		user = if Ecto.assoc_loaded?(topic.user), 
			do: BackendWeb.UserView.render_one(topic.user), else: %{}
		categories = if Ecto.assoc_loaded?(topic.categories), 
			do: render_categories(topic.categories), else: []

	  %{
	    id: topic.id,
	    content: topic.content,
	    user: user,
	    liked: liked_topics(topic.id, likes),
	    likes_count: topic.likes_count,
	    categories: categories,
	    inserted_at: topic.inserted_at
	  }
	end

	def liked_topics(topic_id, likes) do
		Enum.find_value(likes, fn like -> user_liked_topic?(like, topic_id) end)
	end

	def user_liked_topic?(like, topic_id) do
		like.topic_id === topic_id
	end

  def render_categories(categories) do
    categories
    |> Enum.map(fn(o) -> Map.take(o, [:id, :title]) end)
  end
end