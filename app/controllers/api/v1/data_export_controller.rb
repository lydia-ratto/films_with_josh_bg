class Api::V1::DataExportController < ApplicationController
  include ActionController::MimeResponds
  def export_csv
    @data = Film.all
    
    respond_to do |format|
      format.csv do
        send_data @data.to_csv, filename: "all_film_reviews.csv"
      end
    end
  end
end
