defmodule BackendWeb.CategoryView do
	use BackendWeb, :view

	def render("index.json", %{categories: categories}) do
		%{
    	categories: render_many(categories)
    }
	end

	def render_many(categories) do
  	Enum.map(categories, &render_one/1)
	end

	def render_one(category) do
	  %{
	    id: category.id,
	    title: category.title
	  }
	end
end