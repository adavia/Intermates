defmodule Backend.Discussions.Like do
  use Ecto.Schema
  import Ecto.Changeset

  alias Backend.Accounts.User
  alias Backend.Discussions.Topic

  schema "likes" do
    belongs_to :user, User
    belongs_to :topic, Topic

    timestamps()
  end

  @doc false
  def changeset(like, attrs) do
    like
    |> cast(attrs, [:user_id, :topic_id])
    |> validate_required([:user_id, :topic_id])
  end
end
