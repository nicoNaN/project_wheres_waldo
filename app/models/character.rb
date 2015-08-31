class Character < ActiveRecord::Base

  has_many :guesses
  has_many :games, through: :guesses
end
