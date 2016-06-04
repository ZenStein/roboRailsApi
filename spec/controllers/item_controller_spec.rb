require "rails_helper"

describe ItemsController do
  describe 'GET #index'do

  end

  describe 'GET #show' do
    it "assigns the requested item to @item" do
      category = FactoryGirl.create(:category)
      item = FactoryGirl.create(:item)
      item.categories << category
      get :show, {category_id: category.id, id: item.id}
      expect(assigns(:item)).to eq item
    end
  end


  describe 'GET #edit' do
    it "assigns the requested item to @item" do
      item = FactoryGirl.create(:item)
      category = FactoryGirl.create(:category)
      get :edit, category_id: category.id, id: item
      expect(assigns(:item)).to eq item
    end
  end

  describe 'POST #create' do
    it "creates a new instance" do
      @item_attributes = FactoryGirl.attributes_for(:item, category_id: @category)
      category = FactoryGirl.create(:category)
      expect {
      post :create, category_id: category.id, item: @item_attributes
      }.to change(Item, :count).by(1)
    end
  end
end