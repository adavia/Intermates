defmodule BackendWeb.Plugs.IsAuth do
	import Plug.Conn 
	import Phoenix.Controller

	def init(_params) do
	end

	def call(conn, _params) do
		if conn.assigns[:current_user] do
			conn
		else
			conn
			|> put_status(:unauthorized)
			|> render(BackendWeb.ErrorView, "unauthorized.json")
			|> halt
		end
	end
end