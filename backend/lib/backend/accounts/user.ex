defmodule Backend.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  alias Backend.Accounts.{Session, Profile}
  alias Backend.Discussions.{Topic, Message, Like}

  schema "users" do
    field :active, :boolean, default: false
    field :email, :string
    field :encrypted_password, :string
    field :username, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true

    has_one :profile, Profile
    has_many :sessions, Session
    has_many :topics, Topic
    has_many :messages, Message
    has_many :likes, Like

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :active])
    |> validate_required([:username, :email, :active])
  end

  def registration_changeset(user, attrs) do
    user
    |> changeset(attrs)
    |> cast(attrs, [:password, :password_confirmation])
    |> validate_required([:password, :password_confirmation])
    |> validate_confirmation(:password, message: "does not match password!")
    |> validate_length(:password, min: 6, max: 100)
    |> unique_constraint(:username)
    |> unique_constraint(:email)
    |> encrypt_password()
  end

  defp encrypt_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        put_change(changeset, :encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        changeset
    end
  end
end
