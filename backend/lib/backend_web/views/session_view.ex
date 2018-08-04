defmodule BackendWeb.SessionView do
	use BackendWeb, :view

	def render("show.json", %{session: session, user: user}) do
    %{
      token: session.token,
      user: BackendWeb.UserView.render_one(user)
    }
  end

  def render("error.json", _) do
    %{
    	error: "Invalid email or password. Try that again."
    }
  end

  def render("delete.json", _) do
    %{
    	ok: true
    }
  end
end