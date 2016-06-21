require 'faker'

10.times do
  User.create!(username: Faker::Internet.user_name, password: Faker::Lorem.word)
  Post.create!(author_id: User.all.sample.id, title: Faker::Lorem.sentence, url: Faker::Internet.url)
  Comment.create!(commenter_id: User.all.sample.id, post_id: Post.all.sample.id, comment_text: Faker::Lorem.paragraph)
end

