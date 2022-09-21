Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :samples, only: [:index]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
