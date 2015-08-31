class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :score
      t.string :handle
      t.datetime :completed

      t.timestamps null: false
    end
  end
end
