class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :xpos
      t.integer :ypos

      t.timestamps null: false
    end
  end
end
