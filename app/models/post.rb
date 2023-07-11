class Post < ApplicationRecord
    belongs_to :user
    has_many :commenters
    has_one_attached :image
end
