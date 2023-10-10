# app/controllers/sessions_controller.rb
class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super do |user|
      if user.persisted?
        render json: {
          user: user.as_json(only: [:id, :email, :username, :favourite_film])
        }
        return
      end
    end
  end

  def destroy
    super do |user|
    end 
  end
  
end
