defmodule BackendWeb.Router do
  use BackendWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug BackendWeb.Plugs.AuthUser
  end

  scope "/api", BackendWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit] do
      get "/categories", UserController, :categories
    end

    resources "/topics", TopicController, except: [:new] do
      resources "/likes", LikeController,  only: [:create]
    end

    resources "/sessions", SessionController, only: [:create, :delete]
    get "/sessions/me", SessionController, :current_user

    resources "/categories", CategoryController, only: [:index, :create] do
      get "/messages", MessageController, :index
    end
  end
end
