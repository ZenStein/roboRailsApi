class Viewfiller
    attr_accessor :name, :id
  def initialize(*args)
    @name = args[0] || 'Coming Soon'
    @id = args[1] || 234  
  end


end
class CategoriesController < ApplicationController
 include AdminHelper
  def index
    # @categories = Array.new(cats.length%3, {})
    # cats.each do |cat|
    #   @categories << cat
    # end
     @categories = Category.all
      @categories.length%4.times do 
          @categories << Viewfiller.new
      end
      @categories
  end

  def show
    @category = Category.find_by(id: params[:id])  
    @category    

  end

  def create
     category =  Category.new(category_params)
      if category.save
        redirect_to categories_path
      else
        redirect_to new_category_path
      end
  end

  def destroy
    @category = Category.find_by(id: params[:id])
    @category.destroy
    redirect_to categories_path
  end

  def update

  end

  def edit
    @category = Category.find(params[:category_id])
    @item = Item.find(params[:id])
  end

  def new
    @category = Category.new
  end

  def email_test
    user = User.find_by(email: 'shaneenterprises@gmail.com')
     UserMailer.welcome_email(user).deliver_now
      redirect_to root_path
  end
    private
  def category_params
    params.require(:category).permit(:name)
  end

end
