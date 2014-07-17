json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :price, :latitude, :longitude
  json.url restaurant_url(restaurant, format: :json)
end
