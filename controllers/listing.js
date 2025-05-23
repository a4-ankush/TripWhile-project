const Listing = require("../models/listing.js");

const axios = require("axios");
const mapConfigKey = process.env.MAPTILER_API_KEY;

// usage for forward geocoding:
async function geocodeLocation(query) {
  const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(
    query
  )}.json?key=${mapConfigKey}`;
  const response = await axios.get(url);
  return response.data; // contains features array with geometry.coordinates
}

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not exists!");
    return res.redirect("/listings");
  }
  console.log(listing);
  res.render("./listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
  const geoData = await geocodeLocation(req.body.listing.location);
  const coordinates = geoData.features[0]?.geometry?.coordinates || [0, 0];
  console.log(coordinates);

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = { type: "Point", coordinates };
  let savedListing = await newListing.save();
  console.log(savedListing);

  req.flash("success", "Successfully created a new listing!");
  res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exists!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  // originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_150");
  res.render("./listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listingSchema.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Successfully Updated the listing!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Successfully deleted the listing!");
  res.redirect("/listings");
};

module.exports.searchListing = async (req, res) => {
  const query = req.query.q;
  const listings = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ],
  });
  res.render("./listings/searchResults.ejs", { listings, query });
};
