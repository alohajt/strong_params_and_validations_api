class UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users
    end
    
    def show
        @user = User.find(params[:id])

        render json: @user
    end

    def create
        @user = User.new(user_params)
            if @user.save
                render json: @user
            else
                render json: @user.errors.messages
            end
    end

    def update
        @user = User.find(params[:id])
            if @user.update
                @user.update(user_params)
            else
                render json: @user.errors.messages
            end    
    end

    def destroy
        @user = User.find(params[:id])

        @user.destroy
    end


    private

    def user_params
        params.require(:user).permit([:name, :username, :email, :password])
        # user is the top level key
        # {"user":{
        #     "name":"JT",
        #     "username":"jt",
        #     "email": "jt@rmial.com"
        #     "another one": "wont go thru"
        # }}
    end
end
