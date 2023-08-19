class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :bio, :display_name, :user_id, :image
end
