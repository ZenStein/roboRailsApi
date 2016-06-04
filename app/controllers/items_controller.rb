class ItemsController < ApplicationController
  
  def show
    @item = Item.find_by(id: params[:id])
  end

  def new
    @category = Category.find_by(id: params[:category_id])
    @item = Item.new
  end

  def create
    item = Item.new(items_params)
  if item.save
    category = Category.find(params[:category_id])
    category.items << item
    redirect_to "/categories/#{params[:category_id]}"
  else
    redirect_to new_category_item_path
  end
end

  def destroy
      item = Item.find(params[:id])
      item.destroy
      redirect_to category_path(params[:category_id])
  end


  def edit
    @category = Category.find(params[:category_id])
    @item = Item.find(params[:id])
  end


  def update
    @category = Category.find_by(id: params[:category_id])
    @item = Item.find_by(id: params[:id])
    @item.categories = []
    params[:category_ids].each do |category_name|
      cat = Category.find_by_name(category_name)
      @item.categories << cat if cat
    end

    if @item.update(items_params)
      redirect_to category_path(params[:category_id])
    else
      redirect_to edit_category_item
    end
  end

  private
    def items_params
      params.require(:item).permit(:name, :description, :price, :quantity, :image_url, :categories)
    end
end
