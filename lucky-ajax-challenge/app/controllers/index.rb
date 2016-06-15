get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  @die = Die.new(params[:sides].to_i)

  if request.xhr?
    @die.roll.to_s
  else
    erb :index  # HINT: what does this do? what should we do instead?
  end
end
