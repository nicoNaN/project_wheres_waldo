class GamesController < ApplicationController

  def create
    @game = Game.create
    redirect_to @game
  end

end
