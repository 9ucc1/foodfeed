class PostsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def create
        post = Post.create!(post_params)
        render json: post, include: :image, include: :comments, status: :created
    end

    def show
        post = Post.find(params[:id])
        image = rails_blob_path(post.image)
        render json: {post: post, image: image}
    end

    def index
        posts = Post.all.order(created_at: :desc)
        render json: posts
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post, include: :image
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :image, :caption, comments: [])
    end

end
