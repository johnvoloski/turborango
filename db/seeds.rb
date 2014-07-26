# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
for i in 0..100
  latitude = "-29.#{rand(60..70)}#{rand(1000..9999)}".to_f
  longitude = "-50.#{rand(71..79)}#{rand(1000..9999)}".to_f
  Restaurant.create( name: "Restaurante " + i.to_s, price: rand(10..125), latitude: latitude, longitude: longitude)
end
