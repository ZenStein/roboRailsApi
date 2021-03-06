class Category < ActiveRecord::Base
  validates :name, presence: true
  validates :name, uniqueness: true
  has_many :items, as: :itemable
end
