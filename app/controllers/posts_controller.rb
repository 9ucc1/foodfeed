class PostsController < ApplicationController

    def create
        #post1 = Post.create(post_params)
        #byebug
        post = Post.create!(post_params)
        render json: post, include: :image
        #render json: post1
    end

    def show
        post = Post.find(params[:id])
        render json: post, include: :image
    end

    def index
        render json: Post.all, include: :image
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :image, :caption)
        #params.require(:post).permit(:user_id, :caption)
    end

end
