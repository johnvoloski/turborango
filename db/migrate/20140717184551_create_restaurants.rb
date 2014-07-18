class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.float :price
      t.decimal :latitude, precision: 10, scale: 8
      t.decimal :longitude, precision: 10, scale: 8

      t.timestamps
    end
  end
end
