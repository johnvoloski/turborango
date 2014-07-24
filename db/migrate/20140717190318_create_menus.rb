# -*- encoding : utf-8 -*-

class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.text :dish
      t.integer :weekday
      t.references :restaurant, index: true

      t.timestamps
    end
  end
end
