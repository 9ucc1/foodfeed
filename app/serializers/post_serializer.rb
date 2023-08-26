class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image_url, :user_id, :timestamp
  has_many :comments, serializer: PostCommentSerializer

  def timestamp
    self.object.created_at.strftime('%B %e at %I:%M %P')
  end
end
