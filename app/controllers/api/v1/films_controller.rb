require 'pagy/extras/metadata'
class Api::V1::FilmsController < ApplicationController
  include FilmsConcern
  include Pagy::Backend
  before_action :set_film, only: %i[show update destroy]

  def index
    query = params[:query]
    films = query ? Film.search_by_title_director_and_actors(query) : Film.all
    films = apply_sort(films)

    @pagy, @films = pagy(films)

    render json: { data: @films, pagy: pagy_metadata(@pagy) }
  end

  def show
    render json: @film
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

  def update
    if @film.update(film_params)
      render json: @film, status: :ok
    else
      render json: { errors: @film.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @film
      @film.destroy
      render status: :ok
    else
      render json: { error: 'Film review not found' }, status: :not_found
    end
  end

  private

  def set_film
    @film = Film.find(params[:id])
  end

  def film_params
    params.require(:film).permit(:imdb_id, :josh_score, :josh_notes, :date_watched, :seen_before, :location_watched)
  end

  def apply_sort(films)
    sort_params = params[:sort]

    case sort_params
    when 'date_added_asc'
      films.order(date_watched: :asc)
    when 'date_added_desc'
      films.order(date_watched: :desc)
    when 'date_released_asc'
      films.order(release_year: :asc)
    when 'date_released_desc'
      films.order(release_year: :desc)
    when 'score_asc'
      films.order(josh_score: :asc)
    when 'score_desc'
      films.order(josh_score: :desc)
    else
      films.order(date_watched: :desc)
    end
  end

end
