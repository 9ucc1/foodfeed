class PostsController < ApplicationController

    def create
        post = Post.create(post_params)
        render json: post, status: created
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :image, :caption)
    end

end
