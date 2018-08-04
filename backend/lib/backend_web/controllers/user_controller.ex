defmodule BackendWeb.UserController do
	use BackendWeb, :controller
	
	alias Backend.Accounts
	alias Backend.Services.Auth

	plug BackendWeb.Plugs.IsAuth when not action in [:index, :create]

	def index(conn, _params) do
		users = Accounts.list_users
		render(conn, "index.json", users: users)
	end

	def show(conn, %{"id" => id}) do
		user = Accounts.get_user(id)
		render(conn, "show.json", user: user)
	end

	def create(conn, params) do
		case Accounts.create_user(params) do
			{:ok, user} ->
				token = Auth.generate_token(user.id)
				ip_address = conn.remote_ip |> Tuple.to_list() |> Enum.join(".")
        case Accounts.create_session(user.id, token, ip_address) do
          {:ok, session} ->
            conn
            |> put_status(:created)
            |> render(BackendWeb.SessionView, "show.json", session: session, user: user)
          {:error, error} ->
            conn
            |> put_status(error)
            |> render("error.json")
        end
			{:error, changeset} -> 
				conn
				|> put_status(:unprocessable_entity)
		    |> render(BackendWeb.ErrorView, "error.json", changeset: changeset)
		end
	end

	def categories(conn, _params) do
		current_user = conn.assigns.current_user
	  categories = Accounts.list_user_categories(current_user)
	  render(conn, BackendWeb.CategoryView, "index.json", categories: categories)
	end
end