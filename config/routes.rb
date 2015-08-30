Rails.application.routes.draw do
  root 'guesses#index'

  resources :guesses
end
