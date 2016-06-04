require "rails_helper"

Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

RSpec.describe User, type: :model, js: true do 
    let(:admin) { User.create!(first_name: "tim", last_name: "tim", email: "tim@tim.com", password: "timtim", admin: true)}
    feature "Admin login" do
      scenario "logs in" do

        visit root_path
        click_link 'Login'
        fill_in "email", with: admin.email
        fill_in "password_plaintext", with: 'timtim'
        sleep(1)
        click_button 'Sign in'

        visit root_path

        expect(page).to have_content("Tim")
      end
    end
end