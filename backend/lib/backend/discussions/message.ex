defmodule Backend.Discussions.Message do
  use Ecto.Schema
  import Ecto.Changeset

  alias Backend.Accounts.User
  alias Backend.Discussions.Category

  schema "messages" do
    field :content, :string
    belongs_to :user, User
    belongs_to :category, Category

    timestamps()
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:content, :user_id, :category_id])
    |> validate_required([:content, :user_id])
  end
end
