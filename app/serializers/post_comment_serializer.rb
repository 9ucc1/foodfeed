class PostCommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :post_id, :timestamp

  def timestamp
    self.object.created_at.strftime('%B %e at %I:%M %P')
  end
end
