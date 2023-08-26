class ProfilesController < ApplicationController

    def create
        profile = Profile.create!(profile_params)
        render json: profile, include: :image
    end

    def index
        render json: Profile.all.with_attached_image
    end

    #def show
    #    profile = Profile.find(params[:id])
    #    if profile.image = nil
    #        render json: {profile: profile}
    #    else
    #        avatar = rails_blob_path(profile.image)
    #        render json: {profile: profile, image: avatar}
    #    end
    #end

    #def show
    #    profile = Profile.find(params[:id])
    #    avatar = rails_blob_path(profile.image)
    #    render json: {profile: profile, image: avatar}
    #end
    # what is this thing receiving? just id?

    def show
        profile = Profile.find(params[:id])
        # if no display name, display the username
        if profile.image.attached?
            avatar = rails_blob_path(profile.image)
        else 
            #avatar = []
            profile.image.attach(io: File.open(Rails.root.join('db/images/avatar.jpeg')),
            filename: 'avatar.jpeg')
        end
        render json: {profile: profile, image: avatar}
    end

    def update
        #byebug
        profile = Profile.find(params[:id])
        profile.update!(profile_params)
        render json: profile, include: :image, status: :created
    end

    private

    def profile_params
        params.require(:profile).permit(:bio, :display_name, :user_id, :image)
    end

end
