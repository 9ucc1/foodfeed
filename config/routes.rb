Rails.application.routes.draw do
  get '/me', to: 'users#me'

  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :users, only: [:index, :show]
  resources :profiles, only: [:create, :update, :show, :index]
  resources :posts
  resources :comments, only: [:create, :destroy, :show, :index]

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
