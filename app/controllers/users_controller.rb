class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
