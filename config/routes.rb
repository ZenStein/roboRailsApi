Rails.application.routes.draw do

  root 'categories#index'
  resources :categories do
    resources :items
  end

  resources :cart do
      resources :items
  end
    # get 'cart_tmpl', to:'cart#cart_tmpl'
    # delete 'item_storage' to:'shopping_cart#'   
  
  post 'cart_tmpl', to:'cart#cart_tmpl'
  

  resources :users
  delete 'sessions', to:'sessions#destroy'
  get 'sessions/new', to:'sessions#new'
  post 'sessions/new', to:'sessions#create'
  get 'test/email', to:'categories#email_test'
  # get 'shopping_cart/add_item', to:'shopping_cart#add_item'


  # resources :sessions, only: [:new, :destroy, :create]


end
