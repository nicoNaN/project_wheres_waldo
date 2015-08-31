class Guess < ActiveRecord::Base
  belongs_to :character
  belongs_to :game

  validates :character,
            :xpos,
            :ypos, presence: true
end
