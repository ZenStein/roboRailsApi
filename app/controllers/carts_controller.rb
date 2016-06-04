class CartsController < ApplicationController

  def add
    id = params[:id]
    if session[:cart]
      cart = session[:cart]
    else
      session[:cart] = {}
      cart = session[:cart]
    end
    
    if params[:quantity].to_i == 0
      flash[:insufficient_items] = "Does not fempute!"
      redirect_to :back
      return
    end

    if params[:quantity].to_i > Item.find(id).quantity
      flash[:insufficient_items] = "Not enough items in stock"
      redirect_to :back
      return
    end
    
    if cart[id]
      cart[id] = cart[id] + params[:quantity].to_i
    else
      cart[id] = params[:quantity].to_i
    end

    if request.xhr?
      redirect_to :partial => "/carts/show"
    else
      redirect_to :action => :index
    end
  end

  def update
    id = params[:id]
    cart = session[:cart]

    if params[:quantity].to_i == 0
      cart.delete(id)
      redirect_to :back
      return
    end

    if params[:quantity].to_i > Item.find(id).quantity
      flash[:insufficient_items] = "Not enough items in stock"
      redirect_to :back
      return
    end
    
    if cart[id]
      cart[id] = params[:quantity].to_i
    else
      cart[id] = params[:quantity].to_i
    end

    redirect_to :back

  end

  def clear_cart
    session[:cart] = nil
    redirect_to :action => :index
  end

  def index
    # @category = Category.find()
    if session[:cart]
      @cart = session[:cart]
    else
      @cart = {}
    end
  end

end