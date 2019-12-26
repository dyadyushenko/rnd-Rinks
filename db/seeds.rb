# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rink = Rink.create(title: 'Hello World', descriprion: 'app RoR')

section = Selection.create(title: 'Chapter 1', rink: rink)

episodes = Episode.create([
        { title: '1. Setting up a new RoR app', description: 'Nasty', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section },
        { title: '2. Adding React to existing Rails app', description: 'Nasty', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section },
        { title: 'Building a Hello World app', description: 'Nasty', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section },
        { title: 'Adding React Router Dom to your app', description: 'Nasty', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section },
                          ])