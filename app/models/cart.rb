class Cart < ActiveRecord::Base
  
  has_many :items, as: :itemable
  belongs_to :user
end
