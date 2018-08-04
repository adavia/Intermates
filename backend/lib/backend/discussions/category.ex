defmodule Backend.Discussions.Category do
  use Ecto.Schema
  import Ecto.Changeset

  alias Backend.Discussions.{TopicCategory, Message}

  schema "categories" do
    field :title, :string
    
    has_many :topics_categories, TopicCategory
    has_many :topics, through: [:topics_categories, :topic]
    has_many :messages, Message

    timestamps()
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [:title])
    |> validate_required([:title])
  end
end
