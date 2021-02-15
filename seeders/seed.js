const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/imageperformance', {
  useNewUrlParser: true
})

const imageSeed = [
  {
    description: 'Day At The Library',
    image: '/images/1.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Forests Overhead',
    image: '/images/2.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Brick Wall',
    image: '/images/3.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Abstract Door In The Wall',
    image: '/images/4.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Focused Ring',
    image: '/images/5.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Taxi Cab',
    image: '/images/6.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Notre Dame',
    image: '/images/7.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Ethereal Pathway',
    image: '/images/8.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Cutting The Ribbon On Opening Day',
    image: '/images/9.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Skwad',
    image: '/images/10.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Floating Book',
    image: '/images/11.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Finding Answers',
    image: '/images/12.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Flyers On Wall',
    image: '/images/13.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Caution, Wet Floor',
    image: '/images/14.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'At The Edge',
    image: '/images/15.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Museum',
    image: '/images/16.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Foggy Morning',
    image: '/images/17.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Look Up',
    image: '/images/18.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'City',
    image: '/images/19.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Parking Garage',
    image: '/images/20.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Giraffe',
    image: '/images/21.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'On The Rocks',
    image: '/images/22.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Airplane Puddle',
    image: '/images/23.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Good Boy',
    image: '/images/24.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Hydrophobic',
    image: '/images/25.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Snap',
    image: '/images/26.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Space Rock',
    image: '/images/27.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Count The Rings',
    image: '/images/28.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Ice Cream',
    image: '/images/29.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Cactus',
    image: '/images/30.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Hammy',
    image: '/images/31.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Bottom Of The Slide',
    image: '/images/32.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Railroad',
    image: '/images/33.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Frosty Window',
    image: '/images/34.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Feathers',
    image: '/images/35.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Awesomeness',
    image: '/images/36.jpg',
    rating: 0,
    date: new Date(Date.now())
  }
]

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
