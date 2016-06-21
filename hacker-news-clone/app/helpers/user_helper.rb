helpers do

  def current_user
    User.find(session[:user_id])
  end

  def logged_in?
    session[:user_id]
  end

  # def login_redirect
  #   redirect '/users/login' if !logged_in?
  # end
end
