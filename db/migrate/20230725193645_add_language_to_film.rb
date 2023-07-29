class AddLanguageToFilm < ActiveRecord::Migration[7.0]
  def change
    add_column :films, :language, :string
  end
end
