class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :bio, :display_name, :user_id, :image, :image_url
end
