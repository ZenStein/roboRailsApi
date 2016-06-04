# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.


Rails.application.initialize!
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
    :address        => 'smtp.gmail.com',
    :domain         => '<your domain>',
    :port           => 587,
    :user_name      => ENV['GMAIL_USERNAME'],
    :password       => ENV['GMAIL_PASSWORD'],
    :authentication => :plain
} 