class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :bio, :display_name, :user_id
end
