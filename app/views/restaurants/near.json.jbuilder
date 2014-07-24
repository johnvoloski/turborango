json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :name, :price
  json.url restaurant_url(restaurant, format: :json)
end
