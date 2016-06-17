get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

get '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  if request.xhr?
    content_type :json
    {id: params[:id], points: post.points }.to_json
    # post.points.to_s (This is an alternative to JSON objects)
  else
  redirect "/posts"
  end
end

delete '/posts/:id' do
  post = Post.find(params[:id])
  if request.xhr?
    post.destroy
  end
end

post '/posts' do
  post = Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if request.xhr?
    erb :"_newpost", locals: {post: post}, layout: false
  else
    redirect '/posts'
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end