defmodule Backend.Discussions do
	import Ecto.Query, warn: false

  alias Ecto.Multi
	alias Backend.Repo
	alias Backend.Discussions.{Topic, Category, Message, Like}

	def list_topics(params) do
		Topic
    |> order_by(desc: :inserted_at)
		|> preload([:user, :categories])
    |> Repo.paginate(params)
	end

	def create_topic(topic, attrs \\ %{}) do
		Topic.changeset(topic, attrs)
		|> Repo.insert()
		# |> case do
    # 	{:ok, topic} -> {:ok, Repo.preload(topic, [:user, :categories])}
  	#   {:error, changeset} -> {:error, changeset}
  	# end
	end

	def get_topic(id, associations \\ []) do
		Topic
		|> Repo.get(id)
		|> preload_associations(associations)
	end

	def update_topic(topic, attrs \\ %{}) do
		Topic.changeset(topic, attrs)
	 	|> Repo.update()
	end

	def delete_topic(topic) do
    Repo.delete(topic)
  end

  def is_liked?(topic, user) do
  	Like
  	|> Repo.get_by(%{topic_id: topic.id, user_id: user.id})
  end

  def liked_topics(_, nil), do: []
  def liked_topics(topics, current_user) do
    user_id = current_user.id
  	topic_ids = Enum.map(topics, fn topic -> topic.id end)

  	Like 
  	|> where([l], l.topic_id in ^topic_ids)
  	|> where([l], l.user_id == ^user_id) 
  	|> Repo.all
  end

  def create_like(topic_id, user) do
    like_changeset = Like.changeset(%Like{}, %{topic_id: topic_id, user_id: user.id})
    result = from(t in Topic, where: t.id == ^topic_id)
    multi =
      Multi.new
      |> Multi.insert(:like, like_changeset)
      |> Multi.update_all(:topics, result, [inc: [likes_count: 1]], returning: true)
    case Repo.transaction(multi) do
      {:ok, result} -> result
    end
  end

  def delete_like(like, topic_id) do 
    result = from(t in Topic, where: t.id == ^topic_id)
    multi =
      Multi.new
      |> Multi.delete(:like, like)
      |> Multi.update_all(:topics, result, [inc: [likes_count: -1]], returning: true)
    case Repo.transaction(multi) do
      {:ok, result} -> result
    end
  end

  def list_categories() do
		Category |> Repo.all()
	end

	def list_category_messages(category_id) do
		Message
      |> where([m], m.category_id == ^category_id)
      |> order_by([desc: :inserted_at, desc: :id])
      |> preload(:user)
      |> Repo.paginate()
    # Repo.all(
    #   from m in Message,
    #   where: m.category_id == ^category_id,
    #   order_by: [desc: :inserted_at],
    #   limit: 25,
    #   preload: [:user]
    # )
  end

  def paginate_category_messages(category_id, last_seen_id) do
  	Message
      |> where([m], m.category_id == ^category_id)
      |> where([m], m.id < ^last_seen_id)
      |> order_by([desc: :inserted_at, desc: :id])
      |> preload(:user)
      |> Repo.paginate()
  end

	def get_category(id), do: Repo.get(Category, id)

  def create_category(attrs \\ %{}) do
		%Category{}
		|> Category.changeset(attrs)
		|> Repo.insert()
	end

	def create_message(attrs \\ %{}) do
    %Message{}
    |> Message.changeset(attrs)
    |> Repo.insert()
    |> case do
    	{:ok, message} -> {:ok, Repo.preload(message, [:user])}
  	  {:error, changeset} -> {:error, changeset}
  	end
  end

	defp preload_associations(entity, []), do: entity
	defp preload_associations(entity, associations), do: Repo.preload(entity, associations)
end