defmodule Backend.Accounts.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  alias Backend.Accounts.User

  schema "profiles" do
    field :birthday, :date
    field :gender, :string
    belongs_to :user, User

    timestamps()
  end

  @doc false
  def changeset(profile, attrs) do
    profile
    |> cast(attrs, [:gender, :birthday, :user_id])
    |> validate_required([:gender, :birthday])
  end
end
