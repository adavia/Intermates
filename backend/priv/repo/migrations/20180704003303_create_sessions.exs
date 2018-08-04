defmodule Backend.Repo.Migrations.CreateSessions do
  use Ecto.Migration

  def change do
    create table(:sessions) do
      add :token, :string
      add :user_id, references(:users, on_delete: :nothing)
      add :revoked, :boolean, default: false
      add :revoked_at, :utc_datetime
      add :ip_address, :string

      timestamps()
    end

    create index(:sessions, [:user_id])
    create unique_index(:sessions, [:token])
  end
end
