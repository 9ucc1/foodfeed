class PostsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def create
        #post1 = Post.create(post_params)
        #byebug
        post = Post.create!(post_params)
        render json: post, include: :image
        #render json: post1
    end

    def show
        post = Post.find(params[:id])
        image = rails_blob_path(post.image)
        render json: {post: post, image: image}
    end

    def index
        #render json: Post.all, include: :image
        posts = Post.all.order(created_at: :desc)
        render json: posts, include: :image
        # render these as timestamp latest first
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :image, :caption)
        #params.require(:post).permit(:user_id, :caption)
    end

end
