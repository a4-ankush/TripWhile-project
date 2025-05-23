require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/tripWhile";
const MAPTILER_API_KEY = process.env.MAPTILER_API_KEY;

main()
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

async function getCoordinates(location) {
  try {
    const response = await axios.get(
      `https://api.maptiler.com/geocoding/${encodeURIComponent(
        location
      )}.json?key=${MAPTILER_API_KEY}`
    );
    const features = response.data.features;
    if (features && features.length > 0) {
      return features[0].geometry.coordinates;
    }
  } catch (err) {
    console.error(`Geocoding failed for "${location}":`, err.message);
  }
  return [0, 0]; // fallback coordinates
}

const initDB = async () => {
  await Listing.deleteMany({});
  const listingsWithGeo = [];
  for (const obj of initData) {
    const query = obj.location || obj.country;
    const coordinates = await getCoordinates(query);
    listingsWithGeo.push({
      ...obj,
      owner: "681af9dad29e8faa076c1b13",
      geometry: {
        type: "Point",
        coordinates,
      },
    });
  }
  await Listing.insertMany(listingsWithGeo);
  console.log("data was initialized");
};

initDB();
