class CreateCategoriesItems < ActiveRecord::Migration
  def change
    create_table :categories_items do |t|
        t.belongs_to :category
        t.belongs_to :item

        t.timestamps null: false
    end
  end
end
