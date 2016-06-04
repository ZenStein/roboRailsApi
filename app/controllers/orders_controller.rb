class OrdersController < ApplicationController
  
  def index
    @user = User.find(session[:user_id])
  end

  def show
    @order = Order.find(params[:id])
  end

  def create
  	@order = Order.create!(user_id: session[:user_id])

  	error_array = []
    
    session[:cart].each do |id, quantity|
      @item = Item.find(id)
      itemorders = ItemsOrder.new
      itemorders.quantity = quantity
      itemorders.item_id = id
      itemorders.order_id = @order.id
      if @item.quantity - quantity < 0 
        flash[:insufficient_items] = "Insufficient Stock"
        redirect_to :back
        return
      else
        @item.quantity -= quantity
        @item.save
        itemorders.save
      end
    end

  	session[:cart] = nil
  	redirect_to order_path(@order)
  end
end