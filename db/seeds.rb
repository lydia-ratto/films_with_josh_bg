
# require "faker"

# ------------ dev seed ------------------------


# def create_films

#   title = Faker::Movie.title
#   release_year = rand(1970..2022)
#   imdb_id = "#{title} #{release_year}"
#   director = Faker::Movies::HarryPotter.character
#   genres = [Faker::Book.genre, Faker::Book.genre]
#   imdb_score = rand(1..10)
#   rotten_tom_score = rand(1..100)
#   film_length_mins = rand(90..200)
#   summary = Faker::Movie.quote
#   image_url = "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg"
#   location_watched = "Cinema"
#   seen_before = false
#   date_watched = Date.today - rand(1000)
#   josh_score = rand(1..10)
#   josh_notes = "It was good lol"
#   language = Faker::Nation.language
#   age_rating = "PG"

#   {
#     imdb_id:,
#     title:,
#     release_year:,
#     director:,
#     genres:,
#     imdb_score:,
#     rotten_tom_score:,
#     film_length_mins:,
#     summary:,
#     image_url:,
#     location_watched:,
#     seen_before:,
#     date_watched:,
#     josh_score:,
#     josh_notes:,
#     language:,
#     age_rating:
#   }
# end

# Film.destroy_all

# puts "All films destroyed"

# 20.times do
#   Film.create!(create_films)
#   puts "#{Film.last.title} created"
# end

# puts "-----Films created-------"
require 'csv'

puts "-----Create Users-------"

User.destroy_all

User.create!(email: "testuser@test.com", password: "passtest123")

# ------------ prod seeding -------------
Film.destroy_all

CSV.foreach('fwjb.csv', headers: true) do |row|
  film_data = row.to_h
  film = Film.create!(film_data)
  puts "#{film.title} review created"
end
