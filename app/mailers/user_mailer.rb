class UserMailer < ApplicationMailer
  default from: 'shaneenterprises@gmail.com'
  def welcome_email(user)
    (0..2).each do |i|
      p 'this welcome_email method fired!!'
    end
    @user = user
    mail( to: @user.email,
          content_type: "text/html",
          subject: 'Welcome to My Awesome Site')  do |format|
            format.html      
          end
  end

end
