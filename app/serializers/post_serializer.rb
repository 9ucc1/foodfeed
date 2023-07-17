class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image_url, :created_at, :user_id, :comments
end
