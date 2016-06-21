class Post < ActiveRecord::Base
  belongs_to :author, class_name: "User"
  has_many :comments

  validates_presence_of :title, :url

  def hours_since_creation
    t = Time.now
    t.utc.hour - self.created_at.hour
  end

end
