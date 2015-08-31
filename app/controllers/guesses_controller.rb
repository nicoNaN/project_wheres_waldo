class GuessesController < ApplicationController

  def index
    @game = Game.find(params[:game_id])
    @guesses = @game.guesses.all

    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    respond_to do |format|
      format.js
    end
  end

  def new
    @game = Game.find(params[:game_id])
    @guess = @game.guesses.build
    @xpos = params[:xpos]
    @ypos = params[:ypos]

    respond_to do |format|
      format.js { render :new, status: 200, location: [@game, @tag] }
    end
  end

  def create
    @guess = Guess.new( name: params["name"],
                        x: params["x"],
                        y: params["y"]
    )

    respond_to do |format|
      if @guess.save
        if @guess.count == 6
          format.js { redirect_to edit_game_url }
        else
          format.html { redirect_to @game, notice: 'Tag created!' }
          format.js { render :show, status: :created, location: @game }
        end
      end
    end
  end

end
