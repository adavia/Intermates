defmodule BackendWeb.CategoryController do
	use BackendWeb, :controller

	alias Backend.Discussions

	plug BackendWeb.Plugs.IsAuth when action in [:index]

	def index(conn, _params) do
		categories = Discussions.list_categories
		render(conn, "index.json", categories: categories)
	end
end