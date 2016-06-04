

class UsersController < ApplicationController
include ApplicationHelper
def show
  @user = User.find(session[:user_id])
end

def new

end
def create
  @user = User.new(user_params)
  if @user && UserMailer.welcome_email(@user).deliver_now
    @user.save
    session[:user_id] = @user.id
    redirect_to root_path
  else
    flash[:errors] = {danger: 'There was an error registering you!'}
    redirect_to new_user_path
  end
end

private
  def user_params
    # first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
     params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
#
#
# get '/users/new' do
#   if session[:user_id]
#     @user = User.find(session[:user_id])
#     redirect "/users/#{@user.id}"
#   else
#     erb :register
#   end
# end
#
# post '/users/new' do
#   @user = User.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
#   @user.password = params[:password_plaintext]
#   if @user.save
#     session[:user_id] = @user.id
#     redirect '/'
#   else
#     @errors = @user.errors.full_messages
#     erb :register
#   end
# end
#
# get '/users/:user_id' do
#   @logged_in_as = User.find(session[:user_id]) if session[:user_id]
#   @viewing_user = User.find(params[:user_id])
#
#   if @logged_in_as && @logged_in_as.id == @viewing_user.id
#     erb :user
#   else
#     erb :not_authorized
#   end
# end