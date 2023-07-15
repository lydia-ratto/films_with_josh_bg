class Film < ApplicationRecord
  validates_presence_of :imdb_id, :josh_score, message: "this can't be left blank"
  validates :imdb_id, uniqueness: { message: "a review has already been added to this film" }
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
end
