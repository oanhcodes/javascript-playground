class Comment < ActiveRecord::Base
  belongs_to :commenter, class_name: "User"
  validates_presence_of :comment_text
  def hours_since_creation
    t = Time.now
    t.utc.hour - self.created_at.hour
  end
end
