Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'
  resources :users, only: [:index] do
    resources :profiles
  end

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :profiles

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
