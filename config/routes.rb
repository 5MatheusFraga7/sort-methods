Rails.application.routes.draw do

  root 'sort#index'

  get 'to_buble_sort' => 'sort#to_buble_sort'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
