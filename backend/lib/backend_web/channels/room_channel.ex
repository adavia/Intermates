defmodule BackendWeb.RoomChannel do
	use BackendWeb, :channel

  alias BackendWeb.Presence
	alias BackendWeb.{UserView, MessageView, PaginationView}
	alias Backend.Discussions

	def join("room:" <> category_id, _payload, socket) do
    page = Discussions.list_category_messages(category_id)

    response = %{
      messages: MessageView.render_many(page.entries),
      pagination: PaginationView.paginate(page)
    }

    send(self(), :after_join)
    {:ok, response, socket}
  end

  def handle_in("new_message", %{"content" => content}, socket) do
  	category_id = case socket.topic do
		  "room:" <> id -> id
		  _ -> nil
		end
  	user_id = socket.assigns.user.id
  	params = %{user_id: user_id, content: content, category_id: category_id}

    with {:ok, message} <- Discussions.create_message(params) do
      broadcast socket, "new_message", MessageView.render_one(message)
      {:reply, {:ok, MessageView.render_one(message)}, socket}
    else
      _ -> {:reply, {:error, %{message: "Failed to send chat message"}}, socket}
    end
  end

  def handle_in("user_idle", _payload, socket) do
    {:ok, _} = Presence.update(socket, socket.assigns.user.id, %{
      user: UserView.render_one(socket.assigns.user),
      online_at: inspect(System.system_time(:seconds)),
      status: "idle"
    })
    {:noreply, socket}
  end

  def handle_in("user_active", _payload, socket) do
    presence = Presence.list(socket)
    user_id = Integer.to_string(socket.assigns.user.id)

    [meta | _] = presence[user_id].metas
    if meta.status == "idle" do
      {:ok, _} = Presence.update(socket, socket.assigns.user.id, %{
        user: UserView.render_one(socket.assigns.user),
        online_at: inspect(System.system_time(:seconds)),
        status: "active"
      })
    end
    {:noreply, socket}
  end

  def handle_info(:after_join, socket) do
    {:ok, _} = Presence.track(socket, socket.assigns.user.id, %{
      user: UserView.render_one(socket.assigns.user),
      online_at: inspect(System.system_time(:seconds)),
      status: "active"
    })
    push socket, "presence_state", Presence.list(socket)
    {:noreply, socket}
  end
end