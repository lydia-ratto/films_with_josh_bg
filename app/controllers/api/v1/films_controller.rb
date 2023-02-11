class Api::V1::FilmsController < ApplicationController

  def index
    @films = Film.all
    render json: @films
  end
end
