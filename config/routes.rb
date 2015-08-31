Rails.application.routes.draw do
  root 'games#create'

  resources :games do
    resources :guesses
  end

  resources :guesses
end
