class Restaurant < ActiveRecord::Base
  has_many :menus

  validates :name, presence: true
  validates :price, numericality: true, presence: true
  validates :latitude, :longitude, numericality: true, presence: true
end
