class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :post_id
  belongs_to :post

  #def timestamp
  #  self.object.created_at.strftime('%B %e at %I:%M %P')
  #end

  #def user
  #  User.find(self.object.user_id)
  #end
end
