class Game < ActiveRecord::Base
  has_many :guesses
  has_many :tagged_chars, through: :guesses, source: :character

  def chars_picked
    self.tagged_chars.pluck(:name)
  end

  def remaining_chars
    characters = self.chars_picked
    Character.where.not(name: characters)
  end
end
