require "spec_helper"

describe RestaurantsController do
  let(:restaurant) { create(:restaurant) }

  context "routing" do
    it "routes to #index" do
      expect(get restaurants_path).to route_to("restaurants#index")
    end

    it "routes to #new" do
      expect(get new_restaurant_path).to route_to("restaurants#new")
    end

    it "routes to #show" do
      expect(get restaurant_path(restaurant)).to route_to("restaurants#show", :id => restaurant.id)
    end

    it "routes to #edit" do
      expect(get edit_restaurant_path(restaurant)).to route_to("restaurants#edit", :id => restaurant.id)
    end

    it "routes to #create" do
      expect(post restaurants_path).to route_to("restaurants#create")
    end

    it "routes to #update" do
      expect(put restaurant_path(restaurant)).to route_to("restaurants#update", :id => restaurant.id)
    end

    it "routes to #destroy" do
      expect(delete restaurant_path(restaurant)).to route_to("restaurants#destroy", :id => restaurant.id)
    end
  end
end
