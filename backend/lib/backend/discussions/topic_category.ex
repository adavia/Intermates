defmodule Backend.Discussions.TopicCategory do
  use Ecto.Schema
  import Ecto.Changeset
  alias Backend.Discussions.{Topic, Category}

  schema "topics_categories" do
    belongs_to :topic, Topic
    belongs_to :category, Category
  end

  @doc false
  def changeset(topic_category, attrs) do
    topic_category
    |> cast(attrs, [:topic_id, :category_id])
    |> validate_required([:category_id])
  end
end
