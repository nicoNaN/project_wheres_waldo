class GuessesController < ApplicationController

  def index
    @guesses = Guess.all

    respond_to do |format|
      format.html
      format.json { render json: @guesses }
    end
  end

  def create
    @guess = Guess.new( name: params["name"],
                        x: params["x"],
                        y: params["y"]
    )

    respond_to do |format|
      if @guess.save
        format.html { redirect_to root_path }
        format.json { render json: @guess }
      end
    end
  end

  private

  def whitelisted_movie_params
    params.require(:guess).permit(:name, :x, :y)
  end
end
