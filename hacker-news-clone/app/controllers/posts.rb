get '/posts' do
  @all_posts = Post.all
  erb :'/posts/index'
end

get '/posts/new' do
  if logged_in?
    erb :'/posts/new'
  else
    @errors = ["You must be logged in to create a submission!"]
    erb :'/users/new'
  end
end

post '/posts/new' do
  @post = Post.new(author_id: current_user.id, title: params[:title], url: params[:url])
  @all_posts = Post.all
  if @post.save
    erb :'/posts/index'
  else
    @errors = @post.errors.full_messages
    erb :'/posts/new'
  end
end

get '/posts/:id/comments' do
  @post = Post.find(params[:id])
  @all_comments = @post.comments
  erb :'/posts/show'
end

post '/posts/:id/comments' do
  if logged_in?
    @post = Post.find(params[:id])
    @comment = Comment.new(commenter_id: current_user.id, post_id: params[:id], comment_text: params[:comment_text])
    @all_comments = @post.comments
    if @comment.save
      erb :'/posts/show'
    else
      @errors = @comment.errors.full_messages
      erb :'/posts/show'
    end
  else
    @errors = ["You must be logged in to leave a comment!"]
    erb :'/users/new'
  end
end

get '/posts/:id/edit' do
  @post = Post.find(params[:id])
  if current_user.id == @post.author_id
    erb :'/posts/edit'
  else
    redirect '/'
  end
end

put '/posts/:id' do
  @post = Post.find(params[:id])
  if @post.update_attributes(params[:post])
    redirect "/posts/#{@post.id}/comments"
  else
    @errors = @post.errors.full_messages
    erb :'/posts/edit'
  end
end

delete '/posts/:id' do
  post = Post.find(params[:id])
  if current_user.id == post.author_id
    post.destroy
    redirect '/'
  else
    redirect '/'
  end
end










