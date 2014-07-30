# -*- encoding : utf-8 -*-
class WelcomeController < ApplicationController
  def index
    render :file => 'public/templates/index.html'
  end
end
