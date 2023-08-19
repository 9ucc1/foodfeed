class Post < ApplicationRecord
    has_one_attached :image
    belongs_to :user
    has_many :comments, dependent: :destroy

    #validates :image, presence: :true

    def image_url
        if image.attached?
            Rails.application.routes.url_helpers.url_for(image)
        end
    end
end
