defmodule Backend.Repo.Migrations.CreateProfiles do
  use Ecto.Migration

  def change do
    create table(:profiles) do
      add :gender, :string
      add :birthday, :date
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:profiles, [:user_id])
  end
end
