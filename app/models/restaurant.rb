# -*- encoding : utf-8 -*-
class Restaurant < ActiveRecord::Base
  has_many :menus, dependent: :destroy

  validates :name, presence: true
  validates :price, numericality: true, presence: true
  validates :latitude, :longitude, numericality: true, presence: true
end
