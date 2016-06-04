class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.float :price
      t.string :image_url
      t.integer :quantity
      t.references :itemable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
