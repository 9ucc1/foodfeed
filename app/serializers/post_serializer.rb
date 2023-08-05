class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image_url, :user_id, :date
  has_many :comments, serializer: PostCommentSerializer

  def date
    self.object.created_at.strftime('%B %e at %I:%M %P')
  end

  def time
    self.object.created_at.strftime('%I:%M %P')
  end
end
