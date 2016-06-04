class Item < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true
  validates :image_url, presence: true
  validates :quantity, presence: true

  belongs_to :itemable, :polymorphic => true 
  # has_many :categories_items
  # has_many :categories, through: :categories_items
  
  # has_many :carts_items
  # has_many :carts, through: :carts_items

end

