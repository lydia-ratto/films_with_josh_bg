class AddAgeRatingToFilm < ActiveRecord::Migration[7.0]
  def change
    add_column :films, :age_rating, :string
  end
end
