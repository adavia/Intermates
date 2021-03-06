defmodule Backend.AccountsTest do
	use Backend.DataCase
	alias Backend.Accounts

	describe "users" do
		@valid_attrs %{
			username: "test", 
			email: "test@test.com", 
			password: "123456", 
			password_confirmation: "123456", 
			active: true
		}

		def user_fixture(attrs \\ %{}) do
			with create_attrs <- Map.merge(@valid_attrs, attrs),
				{:ok, user} <- Accounts.create_user(create_attrs)
			do
				user |> Map.merge(%{password: nil, password_confirmation: nil})
			else
				error -> error
			end
		end

		test "list_users/0 returns all users" do
			user = user_fixture()
			assert Accounts.list_users() == [user]
		end

		test "get_user/1 returns the user with the id" do
      user = user_fixture()
      assert Accounts.get_user(user.id) == user
    end

    test "create_user/1 creates the user in the db and returns it" do
      before = Accounts.list_users()
      user = user_fixture()
      updated = Accounts.list_users()
      assert !(Enum.any?(before, fn u -> user == u end))
      assert Enum.any?(updated, fn u -> user == u end)
    end

    test "create_user/1 fails to create the user without a password and password_confirmation" do
      {:error, changeset} = user_fixture(%{password: nil, password_confirmation: nil})
      assert !changeset.valid?
    end

    test "create_user/1 fails to create the user when the password and 
    	the password_confirmation don't match" do
      {:error, changeset} = user_fixture(%{password: "test", password_confirmation: "fail"})
      assert !changeset.valid?
    end
	end
end