# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding"

p10 = Profile.create(
    display_name: "seed profile",
    bio: "test bio",
    user_id: 5
)
p10.image.attach(io: File.open(Rails.root.join('db/images/apple.jpeg')),
filename: 'apple.jpeg')

puts "seeded"