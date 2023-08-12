class User < ApplicationRecord
    has_secure_password
    has_one :profile
    has_many :posts
    has_many :comments

    validates :name, :username, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true
end