defmodule Backend.Discussions.Topic do
  use Ecto.Schema
  import Ecto.Changeset

  alias Backend.Accounts.User
  alias Backend.Discussions.{TopicCategory, Like}

  schema "topics" do
    field :content, :string
    field :likes_count, :integer, default: 0

    belongs_to :user, User
    has_many :topics_categories, TopicCategory, on_replace: :delete
    has_many :categories, through: [:topics_categories, :category]
    has_many :likes, Like

    timestamps()
  end

  @doc false
  def changeset(topic, attrs) do
    topic
    |> cast(attrs, [:content, :user_id])
    |> cast_assoc(:topics_categories)
    |> validate_required([:content, :user_id])
  end
end
