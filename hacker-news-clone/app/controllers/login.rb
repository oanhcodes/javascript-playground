get '/login/new' do
  erb :'/users/new'
end

post '/login' do
  user = User.find_by(username: params[:username])
  if !user.nil?
    if user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect '/'
    else
      redirect '/login/new'
    end
  else
    @errors = ["Username not found"]
    erb :'/users/new'
  end
end

get '/logout' do
  session.delete(:user_id)
  redirect '/'
end
