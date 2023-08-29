# FoodFeed
FoodFeed is a social media app where users upload pictures of their food - something homemade, or from a restaurant, doesn't matter! Connect with friends to share and comment on each other’s food pics. Use this app for meal tracking, recipe sharing, diet journaling, and more. 

Share words of encouragement, recipes, and restaurant recs, with comments on posts. Personalize your profile with a bio and avatar.

## Preview
![](foodgif.gif)

## Technologies
FoodFeed utilizes a React frontend with a Ruby on Rails backend. Styling was done with styled-components.

ActiveStorage was also used to establish polymorphic models between images, attachments, and models, allowing users to upload images from their local files.

## Setup
Fork and clone this repository onto your local device. In the root directory, run:
- bundle install
- npm install && npm start --prefix-client