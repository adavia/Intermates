defmodule Backend.Repo.Migrations.AddLikesCountToTopics do
  use Ecto.Migration

  def change do
  	alter table(:topics) do
      add :likes_count, :integer, default: 0
    end
  end
end
