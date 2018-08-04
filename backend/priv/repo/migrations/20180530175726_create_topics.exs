defmodule Backend.Repo.Migrations.CreateTopics do
  use Ecto.Migration

  def change do
    create table(:topics) do
      add :content, :text
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:topics, [:user_id])
  end
end
