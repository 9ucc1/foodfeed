class Profile < ApplicationRecord
    has_one_attached :image

    def image_url
        if image.attached?
            Rails.application.routes.url_helpers.url_for(image)
        end
    end
end
