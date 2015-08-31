class CreateGuesses < ActiveRecord::Migration
  def change
    create_table :guesses do |t|
      t.integer :game_id
      t.integer :character_id
      t.integer :xpos
      t.integer :ypos

      t.timestamps null: false
    end
  end
end
