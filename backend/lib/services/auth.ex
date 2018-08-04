defmodule Backend.Services.Auth do
  # These values must be moved in a configuration file
  @secret Application.get_env(:backend, :secret)
  @seed Application.get_env(:backend, :seed)

  def generate_token(id, max_age \\ :infinity) do
    Phoenix.Token.sign(@secret, @seed, id, max_age: max_age)
  end

  def verify_token(token, max_age \\ :infinity) do
    case Phoenix.Token.verify(@secret, @seed, token, max_age: max_age) do
      {:ok, id} -> {:ok, id}
      error -> error
    end
  end
end