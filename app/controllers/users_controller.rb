class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]

    def create
        user = User.create!(user_params)
        byebug
        if user.valid?
            profile = Profile.create(user_id: user.id, display_name: user.username, bio: "")
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def index
        render json: User.all
    end

    def me
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
