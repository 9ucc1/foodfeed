puts "seeding"

User.create(
    id: 1,
    username: "foodie123",
    password: "foodie123",
    password_confirmation: "foodie123"
)
prof1 = Profile.create(
    display_name: "Anna",
    bio: "Hi, I'm Anna and I love to cook for my family!",
    user_id: 1
)
prof1.image.attach(io: File.open(Rails.root.join('db/images/apple.jpeg')),
filename: 'apple.jpeg')

User.create(
    id: 2,
    username: "junglejim4322",
    password: "junglejim4322",
    password_confirmation: "junglejim4322"
)
prof2 = Profile.create(
    display_name: "Jim",
    bio: "I like food",
    user_id: 2
)
prof2.image.attach(io: File.open(Rails.root.join('db/images/banana.jpg')),
filename: 'banana.jpeg')

post1 = Post.create(
    id: 1,
    caption: "what I ate today!",
    user_id: 1
)
post1.image.attach(io: File.open(Rails.root.join('db/images/ramen.jpg')),
filename: 'ramen.jpeg')

post2 = Post.create(
    id: 2,
    caption: "baked some bread haha",
    user_id: 2
)
post2.image.attach(io: File.open(Rails.root.join('db/images/bread.jpeg')),
filename: 'bread.jpeg')

Comment.create(
    text: "did you really make that?",
    post_id: 2,
    user_id: 1
)

Comment.create(
    text: "yes I did!",
    post_id: 2,
    user_id: 2
)

post3 = Post.create(
    id: 3,
    caption: "Deep dish pizza in Chicago!",
    user_id: 1
)
post3.image.attach(io: File.open(Rails.root.join('db/images/pizza.jpg')),
filename: 'pizza.jpg')

Comment.create(
    text: "Looking back this was the best pizza I've ever had!",
    post_id: 3,
    user_id: 1
)

post4 = Post.create(
    id: 4,
    caption: "This is a mango sago dessert that was really good!",
    user_id: 1
)
post4.image.attach(io: File.open(Rails.root.join('db/images/mango.jpg')),
filename: 'mango.jpg')


puts "seeded"