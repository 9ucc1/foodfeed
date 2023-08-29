class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile, :posts, :comments
  has_one :profile, serializer: UserProfileSerializer
end
