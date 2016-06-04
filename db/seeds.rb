  # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)





Category.delete_all
Category.create(name: "Sports and Outdoors")

Category.create(name: "Beauty")
Category.create(name: "Apparel")
Category.create(name: "Automobiles")
Category.create(name: "Vintage Clothing")

Item.delete_all
20.times do
  Item.create(name: Faker::Commerce.product_name, description: Faker::Lorem.sentence, price: rand(10..20), image_url: Faker::Avatar.image,  quantity: rand(10..30))
end

x = 1

20.times do
	CategoriesItem.create(category_id: rand(1..5), item_id: x)
	x += 1
end

def create_user(first_name,email,password,is_admin)
    # params.require(:user).permit(:first_name, :last_name, :email, :password)
  u = User.new(:first_name=>first_name, :last_name=>'McCrabby', :email=>email, :password=>password, :admin => is_admin)
  if !u.save
    p '*'*50
    p 'USER SEED DID NOT SAVE!!!'
    p '*'*50

  end
end
create_user('Tom','tom@tom.com', 'tomtom',false)
create_user('Tim', 'tim@tim.com', 'timtim',true)
