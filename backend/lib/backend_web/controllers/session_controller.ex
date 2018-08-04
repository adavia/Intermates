defmodule BackendWeb.SessionController do
	use BackendWeb, :controller

	alias Backend.Accounts
  alias Backend.Services.Auth

  plug BackendWeb.Plugs.IsAuth when not action in [:create]

	def create(conn, %{"email" => email, "password" => password}) do
    case Accounts.get_user_by_email_and_password(email, password) do
      {:ok, user} ->
        token = Auth.generate_token(user.id)
        ip_address = conn.remote_ip |> Tuple.to_list() |> Enum.join(".")
        case Accounts.create_session(user.id, token, ip_address) do
          {:ok, session} ->
            conn
            |> put_status(:ok)
            |> render("show.json", session: session, user: user)
          {:error, error} ->
            conn
            |> put_status(error)
            |> render("error.json")
        end
      {:error, error} ->
        conn
        |> put_status(error)
        |> render("error.json")
    end
  end

  def current_user(conn, _params) do
    conn
    |> put_status(:ok)
    |> render(BackendWeb.UserView, "show.json", user: conn.assigns.current_user)
  end

  def delete(conn, _params) do
    case Accounts.get_session_by_token(conn.assigns.token) do
      nil -> 
        :error
      session -> 
        Accounts.delete_session(session)
        conn
        |> put_status(204)
        |> render("delete.json")
    end
  end
end