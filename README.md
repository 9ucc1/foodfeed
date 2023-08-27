# FoodFeed
“Have you eaten today?” as an app
Social media type app inspired by BeReal, challenging users to upload a candid (unfiltered, unstaged) photo of something they ate every day. Connect with friends to share and comment on each other’s food pics.

Post a picture of something you cooked, new food you tried at a restaurant, hold yourself accountable to a diet, or check up on yourself and your friends and make sure everyone is eating. Share words of encouragement, recipes, restaurant recs, etc with comments and likes. Personalize your profile with a bio, profile picture, etc.

# Preview
![](foodgif.gif)

Connect with friends - comment on each other’s posts

New technology: ActiveStorage to upload files
Polymorphic models
CSS frameworks: Tailwind, DaisyUI?

Models: User, Post, Comment, Profile

User Attributes: username, password digest, etc
	Has many: posts they’ve created
    Has many: posts through comments
    Has one: profile

Profile Attributes: display name, bio, user_id
	Belongs to: user
    has_one_attached: image

Post Attributes: caption, timestamp, likes, user_id
	Belongs to: user (creator)
    has_one_attached: image
	Has many: comments
	Has many(?): users, through comments
	aliasing

Comment Attributes: text, timestamp, user_id, post_id
	Belongs to: user
    Belongs to: post

------

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
