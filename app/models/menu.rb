# -*- encoding : utf-8 -*-
class Menu < ActiveRecord::Base
  belongs_to :restaurant

  validates :dish, presence: true
  validates :weekday, numericality: true, inclusion: { in: 1..7 }, presence: true
end
