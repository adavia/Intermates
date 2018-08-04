defmodule BackendWeb.MessageController do
	use BackendWeb, :controller

	alias Backend.Discussions

	plug BackendWeb.Plugs.IsAuth when action in [:index]

	def index(conn, params) do
		last_seen_id = params["last_seen_id"] || 0
    category_id = params["category_id"]
		page = Discussions.paginate_category_messages(category_id, last_seen_id)
		render(conn, "index.json", messages: page.entries, page: page)
	end
end