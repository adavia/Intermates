defmodule BackendWeb.MessageView do
	use BackendWeb, :view

	def render("index.json", %{messages: messages, page: page}) do
		%{
    	messages: render_many(messages),
    	pagination: BackendWeb.PaginationView.paginate(page)
    }
	end

	def render_many(messages) do
  	Enum.map(messages, &render_one/1)
	end

	def render_one(message) do
	  %{
	    id: message.id,
	    content: message.content,
	    user: BackendWeb.UserView.render_one(message.user),
	    inserted_at: message.inserted_at
	  }
	end
end