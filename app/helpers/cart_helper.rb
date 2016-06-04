  module CartHelper

  def compress_props(properties, o) 
    new_o = {}
    properties.each do |property|
      new_o[property] = o[property.to_sym]
    end
    new_o
  end

  def tester
    'It worked!'
  end

  def cart_items_provider

  end
  
end