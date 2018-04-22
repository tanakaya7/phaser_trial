Rails.application.routes.draw do
  root to: "home#show"
  get "home/dragon" => "home#dragon", as: :dragon
  get "home/mario" => "home#mario", as: :mario
end
