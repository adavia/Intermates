defmodule BackendWeb.UserView do
	use BackendWeb, :view

	def render("index.json", %{users: users}) do
		%{
    	users: render_many(users)
    }
	end

	def render("show.json", %{user: user}) do
		%{
    	user: render_one(user)
    }
	end

	def render_many(users) do
  	Enum.map(users, &render_one/1)
	end
	
	def render_one(user) do
	  %{
	    id: user.id,
	    username: user.username,
	    email: user.email
	  }
	end
end