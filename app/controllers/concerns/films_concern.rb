module FilmsConcern
  extend ActiveSupport::Concern
  require "json"
  require "open-uri"

  def find_films(film_title)
    film_title = film_title.gsub(" ", "%20")
    url = URI("https://movie-database-alternative.p.rapidapi.com/?s=#{film_title}&r=json&page=1")
    fetch_data(url)
  end

  def fetch_data(url)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["X-RapidAPI-Key"] = #{ENV['RAPID_API_KEY']}
    request["X-RapidAPI-Host"] = 'movie-database-alternative.p.rapidapi.com'

    response = http.request(request)
    JSON.parse(response.read_body)
  end

  def create_film_details(imdb_id)
    url = URI("https://movie-database-alternative.p.rapidapi.com/?r=json&i=#{imdb_id}")
    film_info = fetch_data(url)

    title = film_info['Title']
    release_year = film_info['Year']
                     .to_i
    director = film_info['Director']
    genre = film_info['Genre'].split(', ')
    imdb_score = film_info['imdbRating']
                   .to_i
    rotten_tom_score = film_info['Ratings']
                         .select { |rating| rating['Source'] == 'Rotten Tomatoes' }[0]['Value']
                         .gsub('%', '')
                         .to_i
    film_length_mins = film_info['Runtime']
                         .split(' ')[0]
                         .to_i
    summary = film_info['Plot']
    image_url = film_info['Poster']
    language = film_info['Language']
                 .split(', ')[0]
    rating = film_info['Rated']


    {
      imdb_id:,
      title:,
      release_year:,
      director:,
      genre:,
      imdb_score:,
      rotten_tom_score:,
      film_length_mins:,
      summary:,
      image_url:,
      language:,
      rating:
    }
  end
end