require 'rails_helper'

describe Item do
  let(:valid){Item.new(name: 'Album', description: 'A really great album', price: 10, image_url: Faker::Avatar.image, quantity: 20, categories: [FactoryGirl.create(:category)])}
  let(:invalid){Item.new(name: nil, description: nil, price: nil)}
  
  it "is valid with a name" do
    expect(valid).to be_valid
  end
  it "is valid with a name" do
    expect(valid).to be_valid
  end
  it "is invalid without a name" do
    invalid.valid?
    expect(invalid.errors[:name]).to include("can't be blank")
  end
  it "is invalid without a description" do
    invalid.valid?
    expect(invalid.errors[:description]).to include("can't be blank")
  end
  it "is invalid without an image url" do
    invalid.valid?
    expect(invalid.errors[:image_url]).to include("can't be blank")
  end
  it "is invalid without a price" do
    invalid.valid?
    expect(invalid.errors[:price]).to include("can't be blank")
  end
  it "returns a product's name as a string" do
    expect{valid.name.to be_a_kind_of(String)}
  end
  it "returns a product's description as a string" do
    expect{valid.description.to be_a_kind_of(String)}
  end
  it "returns a product's price as an integer" do
    expect{valid.price.to be_a_kind_of(Float)}
  end
end
