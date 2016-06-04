require "rails_helper"

describe CategoriesController do
  describe 'GET #index'do
    it "renders the :index template" do
      get :index
      expect(response).to render_template :index
    end
  end

  describe 'GET #show' do
    it "assigns the requested category to @category" do
      category = FactoryGirl.create(:category)
      get :show, id: category
      expect(assigns(:category)).to eq category
    end

    it "renders the :show template" do
      category = FactoryGirl.create(:category)
      get :show, id: category
      expect(response).to render_template :show
    end

  end

  describe 'GET #new' do
    it "assigns a new Category to @category" do
      get :new
      expect(assigns(:category)).to be_a_new(Category)
    end
    it "renders the :new template" do
      get :new
      expect(response).to render_template :new
    end
  end

  describe 'POST #create' do
    it "creates new instance" do
      post :create, category: FactoryGirl.attributes_for(:category)
      expect{
        post :create, category: FactoryGirl.attributes_for(:category)
      }.to change(Category, :count).by(1)
    end
  end

  describe 'DELETE #destroy' do
    before :each do
      @category = FactoryGirl.create(:category)
    end
    it "deletes the category" do
      expect{
        delete :destroy, id: @category
      }.to change(Category, :count).by(-1)
    end
    it "redirects to categories#index" do
      delete :destroy, id: @category
      expect(response).to redirect_to categories_url
    end
  end

end
