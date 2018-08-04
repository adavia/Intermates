defmodule Backend.Repo.Migrations.CreateTopicCategories do
  use Ecto.Migration

  def change do
    create table(:topics_categories) do
      add :topic_id, references(:topics, on_delete: :delete_all)
      add :category_id, references(:categories, on_delete: :delete_all)
    end

    create unique_index(:topics_categories, [:topic_id, :category_id])
  end
end
