json.array!(@menus) do |menu|
  json.extract! menu, :id, :dish, :weekday, :restaurant_id
  json.url restaurant_menu_url(@restaurant, menu, format: :json)
end
