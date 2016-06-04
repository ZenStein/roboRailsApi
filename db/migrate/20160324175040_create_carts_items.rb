class CreateCartsItems < ActiveRecord::Migration
  def change
    create_table :carts_items do |t|
      t.belongs_to :item
      t.belongs_to :cart
    end
  end
end
