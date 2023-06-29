class ProfilesController < ApplicationController

    def create
        profile = Profile.create!(profile_params)
        render json: profile
    end

    def index
        render json: Profile.all.with_attached_image
    end

    private

    def profile_params
        params.permit(:bio, :display_name, :user_id, :image)

end
