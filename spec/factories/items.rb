FactoryGirl.define do
  factory :category do
    name {Faker::Name.name}
  end
  factory :invalid_category do
    name nil
  end
  factory :item do
    name { Faker::Commerce.product_name }
    description { Faker::Lorem.sentence }
    image_url { Faker::Avatar.image }
    quantity { rand(10..30) }
    price { Faker::Commerce.price }
    categories { [FactoryGirl.create(:category)] }
  end
  factory :invalid_item do
    title nil
    description nil
    price nil
  end
end
