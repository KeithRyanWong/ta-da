class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :splash_id, null: false

      t.timestamps
    end

    add_index :projects, :user_id
    add_index :projects, :title
  end
end
