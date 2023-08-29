class ProfilesController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def create
        profile = Profile.create!(profile_params)
        render json: profile, include: :image
    end

    def index
        render json: Profile.all.with_attached_image
    end

    def show
        profile = Profile.find(params[:id])
        if profile.image.attached?
            avatar = rails_blob_path(profile.image)
        else 
            profile.image.attach(io: File.open(Rails.root.join('db/images/avatar.jpeg')),
            filename: 'avatar.jpeg')
        end
        render json: {profile: profile, image: avatar}
    end

    def update
        profile = Profile.find(params[:id])
        profile.update!(profile_params)
        render json: profile, include: :image, status: :created
    end

    private

    def profile_params
        params.require(:profile).permit(:bio, :display_name, :user_id, :image)
    end

end
