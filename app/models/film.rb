require 'csv'

class Film < ApplicationRecord
  include PgSearch::Model

  pg_search_scope :search_by_title_director_and_actors,
    against: {
      title: 'A',
      director: 'B',
      summary: 'C'     
    },
    using: {
      tsearch: { prefix: true, any_word: true }
    }

  validates_presence_of :imdb_id, :josh_score, message: "this can't be left blank"
  validates :josh_score, numericality: {
    greater_than_or_equal_to: 0,
    less_than_or_equal_to: 10,
    message: "must be between 0 and 10"
  }

  validate :date_in_future

  def date_in_future
    if date_watched.present? && date_watched >= Date.today
      errors.add(:date_watched, "can't be in the future")
    end
  end

  def self.to_csv
    CSV.generate(headers: true) do |csv|
      csv << column_names
      all.each do |record|
        csv << record.attributes.values
      end
    end
  end
end
