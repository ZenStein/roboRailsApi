  class CreateCarts < ActiveRecord::Migration
  def change
    create_table :carts do |t|
      t.integer :num_items
      t.float :total
      t.float :grand_total
      t.float :tax
      p '&' * 300
      t.text :item_storage, :default => '[{"name": "name", "id": 0, "price": 0.0, "quantity": 0, "image_url": "http://i47.tinypic.com/dx0g11.jpg"}]'      

      t.belongs_to :user  

      t.timestamps null: false
    end
  end
end


