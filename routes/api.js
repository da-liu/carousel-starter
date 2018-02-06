const express = require('express');
const router = express.Router();
router.use((req, res, next) => { setTimeout(() => { next(); }, 1000) }); // FAKE API SLOW DOWN SO WE CAN SEE LOADING

const dogsList = [
  '/assets/dogs/dog0.jpg',
  '/assets/dogs/dog1.jpg',
  '/assets/dogs/dog2.jpg',
  '/assets/dogs/dog3.jpg',
  '/assets/dogs/dog4.jpg',
  '/assets/dogs/dog5.jpg',
  '/assets/dogs/dog6.jpg',
  '/assets/dogs/dog7.jpg',
  '/assets/dogs/dog8.jpg',
  '/assets/dogs/dog9.jpg',
];

const catsList = [
  '/assets/cats/cat0.jpg',
  '/assets/cats/cat1.jpg',
  '/assets/cats/cat2.jpg',
  '/assets/cats/cat3.jpg',
  '/assets/cats/cat4.jpg',
  '/assets/cats/cat5.jpg',
  '/assets/cats/cat6.jpg',
  '/assets/cats/cat7.jpg',
  '/assets/cats/cat8.jpg',
  '/assets/cats/cat9.jpg'
];

// ***
// Your implementation goes in the below endpoint
// ***
router.get('/photos', (req, res, next) => {
  let photoList = [];
  if (req.query.cats) {
    photoList = catsList;
  } else if (req.query.dogs) {
    photoList = dogsList;
  }

  res.send(photoList);
});

module.exports = router;
