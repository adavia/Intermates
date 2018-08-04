defmodule BackendWeb.ErrorView do
  use BackendWeb, :view

  # If you want to customize a particular status code
  # for a certain format, you may uncomment below.
  # def render("500.json", _assigns) do
  #   %{errors: %{detail: "Internal Server Error"}}
  # end

  # By default, Phoenix returns the status message from
  # the template name. For example, "404.json" becomes
  # "Not Found".
  def render("404.json", _assigns) do
    %{
      error: "Page not found"
    }
  end

  def render("500.json", _assigns) do
    %{
      error: "Internal server error"
    }
  end

  def render("forbidden.json", _assigns) do
    %{
      error: "Not authorized"
    }
  end

  def render("unauthorized.json", _assigns) do
    %{
      error: "Not authenticated"
    }
  end

  def render("error.json", %{changeset: changeset}) do
    # When encoded, the changeset returns its errors
    # as a JSON object. So we just pass it forward.
    %{errors: translate_errors(changeset)}
  end

  def translate_errors(changeset) do
    Ecto.Changeset.traverse_errors(changeset, &translate_error/1)
  end

  # In case no render clause matches or no
  # template is found, let's render it as 500
  def template_not_found(_template, assigns) do
    render("500.html", assigns)
  end
end
