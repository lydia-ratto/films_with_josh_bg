class Api::V1::FilmsController < ApplicationController
  include FilmsConcern
  before_action :set_film, only: %i[show edit]

  def index
    @films = Film.all
    render json: @films
  end

  def show
    set_film
  end

  def create
    film_details = create_film_details(params[:film][:imdb_id])
    all_details = film_params.merge(film_details)
    @film = Film.new(all_details)
    if @film.save
      render json: @film
    else
      render json: { errors: @film.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def new
    @film = Film.new
    render json: @film
  end

  def edit
    set_film
  end

  private

  def set_film
    @film = Film.find(params[:id])
    render json: @film
  end

  def film_params
    params.require(:film).permit(:imdb_id, :josh_score, :josh_notes, :date_watched, :seen_before, :location_watched)
  end
end
