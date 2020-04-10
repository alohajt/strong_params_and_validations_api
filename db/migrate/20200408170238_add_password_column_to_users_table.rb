class AddPasswordColumnToUsersTable < ActiveRecord::Migration[6.0]
  def change
    add_column :user, :password_digest, :string
    # rails g migration AddPasswordColumnToUsersTable
    # add_column :tableName, :attrName, :attrType
    # rails db:migrate
    # :password_digest is not plain text of password sneding to your backend, it's  been hashed 
    # (scramble the password, same length of password, hard to reverse engineering the original password)
  end
end
