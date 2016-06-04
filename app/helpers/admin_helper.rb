module AdminHelper

    def is_admin?
      if session[:user_id] != nil
        user = User.find(session[:user_id])
        admin = User.where(admin: true)
        is_admin = false
        admin.each do |admin_user|
          is_admin = true if admin_user.id == user.id
        end
      end
      is_admin
    end

    def sign_out_glyph
      '<span class="fa fa-sign-out fa-2x"></span>'
    end

    def sign_in_glyph
      '<span class="fa fa-sign-in fa-2x"></span>'
    end

    def user_glyph
      '<span class="fa fa-user fa-2x"></span>'
    end

    def shopping_cart_glyph
      '<span class="fa fa-shopping-cart fa-2x"></span>'
    end

    def home_glyph
      '<span class="fa fa-home fa-2x"></span>'
    end


end


