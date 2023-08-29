class CommentsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def index
        render json: Comment.all
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.require(:comment).permit(:text, :user_id, :post_id)
    end
end
