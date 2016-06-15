get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new
  if request.xhr?
    erb :"/horses/new", layout: false
  else
    erb :"/horses/new"
  end
end

post '/horses' do
  @horse = Horse.new(params[:horse])
  if @horse.save
    if request.xhr?
      erb :"/horses/_newhorse", locals: {horse: @horse}, layout: false
    else
      redirect '/horses'
    end
  else
    erb :"/horses/new"
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  if request.xhr?
    erb :"/horses/_horsedetails", locals: {horse: @horse}, layout: false
  else
    erb :"/horses/show"
  end
end
