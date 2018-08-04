defmodule Backend.ChatTest do
  use Backend.DataCase

  alias Backend.Chat

  describe "users_categories" do
    alias Backend.Chat.UserCategory

    @valid_attrs %{}
    @update_attrs %{}
    @invalid_attrs %{}

    def user_category_fixture(attrs \\ %{}) do
      {:ok, user_category} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Chat.create_user_category()

      user_category
    end

    test "list_users_categories/0 returns all users_categories" do
      user_category = user_category_fixture()
      assert Chat.list_users_categories() == [user_category]
    end

    test "get_user_category!/1 returns the user_category with given id" do
      user_category = user_category_fixture()
      assert Chat.get_user_category!(user_category.id) == user_category
    end

    test "create_user_category/1 with valid data creates a user_category" do
      assert {:ok, %UserCategory{} = user_category} = Chat.create_user_category(@valid_attrs)
    end

    test "create_user_category/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Chat.create_user_category(@invalid_attrs)
    end

    test "update_user_category/2 with valid data updates the user_category" do
      user_category = user_category_fixture()
      assert {:ok, user_category} = Chat.update_user_category(user_category, @update_attrs)
      assert %UserCategory{} = user_category
    end

    test "update_user_category/2 with invalid data returns error changeset" do
      user_category = user_category_fixture()
      assert {:error, %Ecto.Changeset{}} = Chat.update_user_category(user_category, @invalid_attrs)
      assert user_category == Chat.get_user_category!(user_category.id)
    end

    test "delete_user_category/1 deletes the user_category" do
      user_category = user_category_fixture()
      assert {:ok, %UserCategory{}} = Chat.delete_user_category(user_category)
      assert_raise Ecto.NoResultsError, fn -> Chat.get_user_category!(user_category.id) end
    end

    test "change_user_category/1 returns a user_category changeset" do
      user_category = user_category_fixture()
      assert %Ecto.Changeset{} = Chat.change_user_category(user_category)
    end
  end
end
