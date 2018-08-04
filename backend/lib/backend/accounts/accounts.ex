defmodule Backend.Accounts do
	import Ecto.Query, warn: false
  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]

	alias Backend.Repo
	alias Backend.Accounts.{User, Profile, Session}

	def list_users(), do: Repo.all(User)

	def create_user(attrs \\ %{}) do
		%User{}
		|> User.registration_changeset(attrs)
    |> Ecto.Changeset.cast_assoc(:profile, with: &Profile.changeset/2)
		|> Repo.insert()
	end

	def get_user(id), do: Repo.get(User, id)

	def get_user_by_email_and_password(nil, _password), do: {:error, :invalid}
  def get_user_by_email_and_password(_email, nil), do: {:error, :invalid}

  def get_user_by_email_and_password(email, password) do
    with %User{} = user <- Repo.get_by(User, email: String.downcase(email)),
    	true <- checkpw(password, user.encrypted_password) do
      	{:ok, user}
    else
      _ ->
        # Help to mitigate timing attacks
        dummy_checkpw()
        {:error, :unauthorized}
    end
  end

  def list_user_categories(user) do
    Repo.all(user, :categories)
  end

  def create_session(id, token, ip) do 
    %Session{}
    |> Session.changeset(%{user_id: id, token: token, ip_address: ip})
    |> Repo.insert()
  end

  def get_session_by_token(token) do 
    Session
    |> Repo.get_by(%{token: token, revoked: false})
    |> Repo.preload(:user)
    # Repo.one(
    #   from s in Session,
    #   join: u in assoc(s, :user),
    #   where: s.token == ^token,
    #   where: s.revoked == false,
    #   select: %{user: %{
    #     id: u.id, 
    #     email: u.email, 
    #     username: u.username
    #   }, 
    #     token: s.token
    #   }
    # )
  end

  def delete_session(session) do 
    Repo.delete(session)
  end
end