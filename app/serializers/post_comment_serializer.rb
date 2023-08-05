class PostCommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :post_id, :timestamp, :username

  def timestamp
    self.object.created_at.strftime('%B %e at %I:%M %P')
  end

  def username
    #user = User.find(self.object.user_id)
    user = User.find(self.object.user_id)
    user.username
  end

end
