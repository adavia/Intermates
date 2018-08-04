defmodule Backend.Accounts.Session do
  use Ecto.Schema
  import Ecto.Changeset

  alias Backend.Accounts.User

  schema "sessions" do
    field :token, :string
    field :revoked, :boolean, default: false
    field :revoked_at, :utc_datetime
    field :ip_address, :string

    belongs_to :user, User

    timestamps()
  end

  @doc false
  def changeset(session, attrs) do
    session
    |> cast(attrs, [:token, :ip_address, :revoked, :revoked_at, :user_id])
    |> validate_required([:token, :user_id])
    |> unique_constraint(:token)
  end
end
