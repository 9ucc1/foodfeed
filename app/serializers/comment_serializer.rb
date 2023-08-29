class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :post_id, :timestamp, :username

  def timestamp
    self.object.created_at.strftime('%B %e at %I:%M %P')
  end

  def username
    u= User.find(self.object.user_id)
    u.username
  end
end
