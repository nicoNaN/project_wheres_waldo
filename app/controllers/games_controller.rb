class GamesController < ApplicationController

  def create
    @game = Game.create
    redirect_to @game
  end

  def show
    @game = Game.find(params[:id])

    if @game.guesses.length == Character.count
      redirect_to root_path
    end
  end

end
