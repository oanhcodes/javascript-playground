class User < ActiveRecord::Base
  has_many :comments, :foreign_key => :commenter_id
  has_many :posts, :foreign_key => :author_id

  validates_presence_of :username, :password
  #Ask about a way to validate against empty passwords
  def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(plaintext_password)
    @password ||= BCrypt::Password.create(plaintext_password)
    self.hashed_password = @password
  end

  def authenticate(plaintext_password)
    self.password == plaintext_password
  end

  def days_since_creation
    (Time.now.day - self.created_at.day).to_s
  end
end
