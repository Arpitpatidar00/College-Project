// import express from 'express';
// import Place from '../models/ImageSchema.js';

// const router = express.Router();

// // Route for adding a place to the database
// router.post('/upload', async (req, res) => {
//   try {
//     const { title, description, cityName, placeName, image } = req.body;

//     // Check if all required fields are provided
//     if (!title || !cityName || !placeName || !image) {
//       return res.status(400).json({ message: 'Please provide title, cityName, placeName, and image' });
//     }

//     // Create a new place document
//     const newPlace = new Place({
//       title,
//       description,
//       cityName,
//       placeName,
//       image // Store the base64 image directly in the database
//     });

//     // Save the place to the database
//     await newPlace.save();

//     res.status(201).json({ message: 'Place added successfully', place: newPlace });
//   } catch (error) {
//     console.error('Error adding place:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// // Route for searching places based on cityName and placeName
// router.get('/search', async (req, res) => {
//   try {
//     const { cityName, placeName } = req.query;

//     // Prepare search criteria
//     const searchCriteria = {};
//     if (cityName) {
//       searchCriteria.cityName = { $regex: new RegExp(cityName, 'i') };
//     }
//     if (placeName) {
//       searchCriteria.placeName = { $regex: new RegExp(placeName, 'i') };
//     }

//     // Find places matching the search criteria
//     const places = await Place.find(searchCriteria);

//     res.json(places);
//   } catch (error) {
//     console.error('Error searching for places:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Route for searching places based on cityName and placeName
// router.get('/search', async (req, res) => {
//   try {
//     const { cityName, placeName } = req.query;

//     // Prepare search criteria
//     const searchCriteria = {};
//     if (cityName) {
//       searchCriteria.cityName = { $regex: new RegExp(cityName, 'i') };
//     }
//     if (placeName) {
//       searchCriteria.placeName = { $regex: new RegExp(placeName, 'i') };
//     }

//     // Find places matching the search criteria
//     const places = await Place.find(searchCriteria);

//     res.json(places);
//   } catch (error) {
//     console.error('Error searching for places:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// export default router;
import express from 'express';
import Place from '../models/ImageSchema.js';

const router = express.Router();

// Route for adding a place to the database
router.post('/upload', async (req, res) => {
  try {
    const { title, description, cityName, placeName, image } = req.body;

    // Check if all required fields are provided
    if (!title || !cityName || !placeName || !image) {
      return res.status(400).json({ message: 'Please provide title, cityName, placeName, and image' });
    }

    // Create a new place document
    const newPlace = new Place({
      title,
      description,
      cityName,
      placeName,
      image // Store the base64 image directly in the database
    });

    // Save the place to the database
    await newPlace.save();

    res.status(201).json({ message: 'Place added successfully', place: newPlace });
  } catch (error) {
    console.error('Error adding place:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for searching places based on cityName and placeName
router.get('/search', async (req, res) => {
  try {
    const { cityName, placeName } = req.query;

    // Prepare search criteria
    const searchCriteria = {};
    if (cityName) {
      searchCriteria.cityName = { $regex: new RegExp(cityName, 'i') };
    }
    if (placeName) {
      searchCriteria.placeName = { $regex: new RegExp(placeName, 'i') };
    }

    // Find places matching the search criteria
    const places = await Place.find(searchCriteria);

    res.json(places);
  } catch (error) {
    console.error('Error searching for places:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for searching a place by ID
router.get('/:id', async (req, res) => {
  try {
    const placeId = req.params.id;

    // Find place by ID
    const place = await Place.findById(placeId);

    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.json(place);
  } catch (error) {
    console.error('Error searching for place by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
