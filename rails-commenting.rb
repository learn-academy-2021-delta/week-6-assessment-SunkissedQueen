# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)BlogPostsController is the controller of the rails application that manages all the helper modules and manages the sessions with a user. All files associated with the controller were created by Rails.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    @posts = BlogPost.all
  end

  def show
    # ---3)@post is an instance variable set within the show method (a restful route that looks for one item in a database). The instance variable is storing the information that will be passed as a param. Instead of having a hard code in the post, Rails will be asked to check its params hash and assign the post key to the instance variable. Dynamic but not functional without a route and a view. On the route, the get http verb is used.
    @post = BlogPost.find(params[:id])
  end

  # ---4)This method defines what will happen during the new method (a restful route that allows users to add information to a web application). It will display a form to the user. On the route, the get http verb is used.
  def new
    @post = Post.new
  end

  def create
    # ---5)@post is an instance variable set within the create method (a restful route that submits users' data to the database). The instance variable is storing the information that will be passed as a param. Instead of having a hard code in the post, Rails will be asked to create a new instance based on the info the user enters. Dynamic but not functional without a route and a view. On the route, the post http verb is used.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)This method defines what will happen during the edit method (a restful route that allows users to edit an active record on a web application). It will display a form to the user. On the route, the patch http verb is used.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)@post.update is an instance variable set during the create method (a restful route that submits users' data to the database). Instead of having a hard code in the post, Rails will be asked to create a new instance based on the info the user enters. Dynamic but not functional without a route and a view. On the route, the put/patch http verb is used. (Sorry for being repetitive. I am trying to stick connect the dots.)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)The browser will redirect to the parameter passed. In this case, if the parameter is not being deleted, then the browser will go to the page of where the requested parameter is located. Currently @post is the storage the location tht will be found in the hash key on the Blogpost database.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)The security system in the rails application. Anything below the word private cannot be accessed outside of this scope of the class. This method can only be called from inside the class where it is defined. Access to the method is now controlled.
  private
  def blog_post_params
    # ---10)Strong parameters indicate what parameters are allowed to be assessed. In this example, the title and content is allowed to be displayed or receive CRUD actions.
    params.require(:blog_post).permit(:title, :content)
  end
end
