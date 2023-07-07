class ProfilesController < ApplicationController

    def create
        profile = Profile.create!(profile_params)
        render json: profile, include: :image
    end

    def index
        render json: Profile.all.with_attached_image
    end

    def show
        profile = Profile.find(params[:id])
        render json: profile
    end

    def update
        byebug
        profile = Profile.find(params[:id])
        profile.update!(profile_params)
        #profile.image.attach(params[:image])
        #avatar = profile.image.attach(avatar_params)
        render json: profile, include: :image, status: :created
    end

    private

    def profile_params
        params.require(:profile).permit(:bio, :display_name, :user_id, :image)
    end

    def avatar_params
        params.permit(:image)
    end

end
