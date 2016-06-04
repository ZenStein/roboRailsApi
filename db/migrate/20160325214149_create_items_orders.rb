class CreateItemsOrders < ActiveRecord::Migration
  def change
    create_table :items_orders do |t|
    	t.integer :quantity
    	t.belongs_to :order, index: true
    	t.belongs_to :item, index: true
    end
  end
end
