class User < ApplicationRecord
    has_secure_password
    has_one :profile
end

class Commenter < User
    #has_many :posts
end
#????
