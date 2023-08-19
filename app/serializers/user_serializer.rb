class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile
  has_one :profile, serializer: UserProfileSerializer
end
