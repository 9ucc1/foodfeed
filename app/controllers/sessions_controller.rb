class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: {error: "invalid username or password"}
        end
    end

    def destroy
        session.destroy
        head :no_content
    end

end
