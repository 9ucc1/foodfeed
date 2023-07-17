class CommentsController < ApplicationController
    def create
        #byebug
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    def index
        render json: Comment.all
    end

    private

    def comment_params
        params.require(:comment).permit(:text, :user_id, :post_id)
    end
end
