    class CartController < ApplicationController
  include ApplicationHelper
  include CartHelper
  # c.items << i  
  # u.cart.items
  def cart_tmpl
    # items = [{id: 1, name: 'somename1'}, {id: 2, name: 'somename2'}, {id: 3, name: 'somename3'}]
    # @cart_totals = {'num_items' => 3,'price' => 99.76, 'tax' => 3.26, 'items' => items }
    @user = current_user
    @cart = @user.cart || Cart.new
    unless @cart.id?
      @cart.user = @user 
      @cart.save
    end
    @items = @cart.items
    p '5'*50
    p @items
   render 'partials/_cart', layout: false, locals: {user: @user, cart: @cart, items: @items} 
  end

  def remove_storage_item

  end

  def add_item

    user = user_provider
    item_id = params[:item_id].to_i
    item = Item.find(item_id) unless user.cart.items.any? {|o| o.id == item_id}
    if item
      user.cart.items << item
      cart_item_init = true
    else
      up_quantity = true
    end
      cart_items = JSON.parse(user.cart.item_storage)
      cart_items << cart_item_provider(item, cart_properties) if cart_item_init
      cart_items = increment_quantity(cart_items, item_id) if up_quantity
      user.cart.item_storage = cart_items.to_json
      user.save
      user.cart.save


    render json: {cart_items: cart_items}, layout: false, status: 200
  end

  def empty_cart

  end
  def remove_item
    id = params[:item_id]
    
  end

  def cart_properties
    ['id', 'name', 'price', 'image_url']
  end
  def cart_item_provider(item, props)
    new_item = Hash.new
    props.each do |prop|
      new_item[prop] = item[prop]
    end
    new_item['quantity'] = 0
    new_item
  end
  def user_provider
    @user = current_user
    unless @user.cart
      p '4' * 100 
      @user.cart = Cart.new
    end
    @user
  end 

  def item_in_storage? items, item_id   
    needle = false
    items.each do |item|
      needle = true if item['id'] == item_id
    end
    needle
  end

  def increment_quantity collection, item_id
collection.is_a? Array
collection.is_a? Object

    collection.map do |o|
      p o
      if o['id'].to_i == item_id
        o['quantity'].to_i
        o['quantity'] = o['quantity'].to_i + 1
        p o['quantity'].to_i
      end
          p o['quantity']
    p o['quantity'].to_i.is_a? Integer
    o
    end
    p 'gggggggg'
    p collection
    collection
  end

end
