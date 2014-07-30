# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "Menus" do
  let(:restaurant) { create(:restaurant) }
  let(:menus)      { create_list(:menu, 3, restaurant_id: restaurant.id) }

  context 'GET /restaurants/:restaurant_id/menus.json' do
    it 'returns 200' do
      get restaurant_menus_path(restaurant, format: :json)
      expect(response.status).to eq(200)
    end
  end

  context 'GET /restaurants/:restaurant_id/menus/:id.json' do
    it 'returns 200' do
      get restaurant_menu_path(restaurant, menus.first, format: :json)
      expect(response.status).to eq(200)
    end
  end

  context 'POST /restaurants/:restaurant_id/menus.json' do
    it 'returns 201' do
      post restaurant_menus_path(restaurant, format: :json), { menu: attributes_for(:menu, restaurant_id: restaurant.id) }
      expect(response.status).to eq(201)
    end
  end

  context 'PATH/PUT /restaurants/:restaurant_id/menus/:id.json' do
    it 'returns 200' do
      put restaurant_menu_path(restaurant, menus.first, format: :json), { menu: attributes_for(:menu, restaurant_id: restaurant.id) }
      expect(response.status).to eq(200)
    end
  end

  context 'DELETE /restaurants/:restaurant_id/menus/:id.json' do
    it 'returns 204' do
      delete restaurant_menu_path(restaurant, menus.first, format: :json)
      expect(response.status).to eq(204)
    end
  end
end
