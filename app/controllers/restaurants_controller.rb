# -*- encoding : utf-8 -*-
class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :update, :destroy]

  # GET /restaurants.json
  def index
    @restaurants = Restaurant.all
  end

  # GET /restaurants/1
  # GET /restaurants/1.json
  def show
  end

  # POST /restaurants.json
  def create
    @restaurant = Restaurant.new(restaurant_params)

    respond_to do |format|
      if @restaurant.save
        format.json { render :show, status: :created, location: @restaurant }
      else
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /restaurants/1.json
  def update
    respond_to do |format|
      if @restaurant.update(restaurant_params)
        format.json { render :show, status: :ok, location: @restaurant }
      else
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /restaurants/1.json
  def destroy
    @restaurant.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  # GET /restaurants/near
  # GET /restaurants/near.json
  def near
    @restaurants = Restaurant.all.sort_by { |r| haversine(r).to_kilometers }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def near_params
      params.permit(:latitude, :longitude)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :price, :latitude, :longitude)
    end

    def haversine(restaurant)
      Haversine.distance(restaurant.latitude.to_f, restaurant.longitude.to_f, near_params[:latitude].to_f, near_params[:longitude].to_f)
    end
end
