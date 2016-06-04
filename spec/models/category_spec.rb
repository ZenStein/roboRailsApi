require 'rails_helper'

describe Category do
  let(:valid){Category.new(name: 'Music')}
  let(:invalid){Category.new(name: nil)}
  it "is valid with a name" do
    expect(valid).to be_valid
  end
  it "is invalid without a name" do
    invalid.valid?
    expect(invalid.errors[:name]).to include("can't be blank")
  end
  it "returns a category's name as a string" do
    expect{valid.name.to be_a_kind_of(String)}
  end
end

