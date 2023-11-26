Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  
  namespace :api do
    namespace :v1 do
      resources :films
      get '/export_csv', to: 'data_export#export_csv'
    end
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
