class GuessesController < ApplicationController

  def index
    @game = Game.find(params[:game_id])
    @guesses = @game.guesses.all

    respond_to do |format|
      format.html
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
    @game = Game.find(params[:game_id])
    @guess = @game.guesses.build(whitelisted_guess_params)

    puts "CHAR ID" + @guess.xpos.to_s

    respond_to do |format|
      if @guess.save
        if @game.guesses.length == Character.count
          format.js { redirect_to edit_game_url(@game) }
        else
          format.html { redirect_to [@game, @tag], notice: 'Tag created!' }
          format.js { render :show, status: :created, location: [@game, @guess] }
        end
      else
        format.html { render :new }
        format.js { render json: @guess.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @guess = Guess.find(params[:id])
    @name = @guess.character.name
    @guess.destroy

    respond_to do |format|
      format.html
      format.js
    end
  end

  private

  def whitelisted_guess_params
    params.require(:guess).permit(:character_id, :xpos, :ypos)
  end

end
