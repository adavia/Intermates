defmodule BackendWeb.Plugs.AuthUser do
  import Plug.Conn
  alias Backend.Accounts

  def init(options), do: options

  def call(conn, _opts) do
    case find_user(conn) do
      {:ok, session} -> authorized(conn, session)
      :error -> auth_error!(conn)
    end
  end

  defp authorized(conn, session) do
  	conn
    |> assign(:current_user, session.user)
    |> assign(:token, session.token)
  end

  defp find_user(conn) do
    with auth_header = get_req_header(conn, "authorization"),
      {:ok, token} <- parse_token(auth_header),
    do: find_session_by_token(token)
  end

  defp parse_token(["Bearer: " <> token]) do
    {:ok, token}
  end
  defp parse_token(_non_token_header), do: :error

  defp find_session_by_token(token) do
    case Accounts.get_session_by_token(token) do
      nil     -> :error
      session -> {:ok, session}
    end
  end

  defp auth_error!(conn) do
    conn |> assign(:current_user, nil)
  end
end