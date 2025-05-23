const sampleListings = [
  {
    title: "Sunny Glade Haven",
    description:
      "Bright retreat with a sunny garden, perfect for a serene escape.",
    image: {
      url: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "sunny_glade.jpg",
    },
    price: 1250,
    location: "Flagstaff",
    country: "USA",
  },
  {
    title: "Dusk Hollow Cottage",
    description: "Cozy cottage in a quiet valley, ideal for evening strolls.",
    image: {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "dusk_hollow.jpg",
    },
    price: 1100,
    location: "Lake District",
    country: "UK",
  },
  {
    title: "Tide Whisper Cabin",
    description: "Simple cabin by the coast, great for a peaceful beach stay.",
    image: {
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "tide_whisper.jpg",
    },
    price: 1350,
    location: "Donegal",
    country: "Ireland",
  },
  {
    title: "Foggy Crest Lodge",
    description: "Rustic lodge in misty hills, perfect for nature enthusiasts.",
    image: {
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "foggy_crest.jpg",
    },
    price: 1450,
    location: "Wanaka",
    country: "New Zealand",
  },
  {
    title: "Wheatfield Barn Stay",
    description:
      "Charming barn in rolling fields, ideal for a countryside retreat.",
    image: {
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "wheatfield_barn.jpg",
    },
    price: 1200,
    location: "Umbria",
    country: "Italy",
  },
  {
    title: "Night Sky Glamp",
    description:
      "Cozy tent under starry skies, perfect for a desert adventure.",
    image: {
      url: "https://images.pexels.com/photos/2888489/pexels-photo-2888489.jpeg?cs=srgb&dl=pexels-jonathanborba-2888489.jpg&fm=jpg",
      filename: "night_sky_glamp.jpg",
    },
    price: 1500,
    location: "Sahara",
    country: "Morocco",
  },
  {
    title: "Cedar Shade Cabin",
    description: "Secluded cabin in a forest, great for a tranquil getaway.",
    image: {
      url: "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "cedar_shade.jpg",
    },
    price: 1400,
    location: "Bavaria",
    country: "Germany",
  },
  {
    title: "Reef Glow Villa",
    description: "Bright villa near the beach, ideal for a tropical escape.",
    image: {
      url: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "reef_glow.jpg",
    },
    price: 1600,
    location: "Port Douglas",
    country: "Australia",
  },
  {
    title: "Hilltop Mist Flat",
    description: "Quaint flat with scenic views, perfect for a city escape.",
    image: {
      url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "hilltop_mist.jpg",
    },
    price: 1150,
    location: "Glasgow",
    country: "Scotland",
  },
  {
    title: "Seagrass Hut Stay",
    description: "Simple hut by the shore, great for a minimalist beach vibe.",
    image: {
      url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "seagrass_hut.jpg",
    },
    price: 1050,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Snowy Ridge Chalet",
    description: "Cozy chalet with mountain views, ideal for a winter stay.",
    image: {
      url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "snowy_ridge.jpg",
    },
    price: 1700,
    location: "Salzburg",
    country: "Austria",
  },
  {
    title: "Brookside Farmhouse",
    description:
      "Charming farmhouse by a stream, perfect for a family retreat.",
    image: {
      url: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "brookside_farm.jpg",
    },
    price: 1300,
    location: "Vermont",
    country: "USA",
  },
  {
    title: "Neon Pulse Loft",
    description: "Modern loft with city views, great for urban adventurers.",
    image: {
      url: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "neon_pulse.jpg",
    },
    price: 1500,
    location: "Busan",
    country: "South Korea",
  },
  {
    title: "Dune Haven Bungalow",
    description: "Cozy bungalow near sandy dunes, ideal for a beach getaway.",
    image: {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "dune_haven.jpg",
    },
    price: 1250,
    location: "Swakopmund",
    country: "Namibia",
  },
  {
    title: "Orchard Dusk Cottage",
    description: "Quaint cottage in an orchard, perfect for a peaceful stay.",
    image: {
      url: "https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "orchard_dusk.jpg",
    },
    price: 1400,
    location: "Franschhoek",
    country: "South Africa",
  },
  {
    title: "Sea Mist Studio",
    description:
      "Bright studio near the coast, great for a vibrant seaside stay.",
    image: {
      url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "sea_mist.jpg",
    },
    price: 1100,
    location: "Durban",
    country: "South Africa",
  },
  {
    title: "Quiet Cliff Cabin",
    description: "Rustic cabin on a ridge, ideal for a nature retreat.",
    image: {
      url: "https://images.pexels.com/photos/803908/pexels-photo-803908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "quiet_cliff.jpg",
    },
    price: 1550,
    location: "Bariloche",
    country: "Argentina",
  },
  {
    title: "Rose Alley Flat",
    description:
      "Cozy flat in a charming neighborhood, perfect for city adventures.",
    image: {
      url: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "rose_alley.jpg",
    },
    price: 1150,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Coral Tide Hut",
    description: "Simple hut by the ocean, great for a relaxed beach stay.",
    image: {
      url: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "coral_tide.jpg",
    },
    price: 1000,
    location: "Tulum",
    country: "Mexico",
  },
  {
    title: "Hearthstone Lodge",
    description:
      "Warm lodge with a fireplace, ideal for a cozy mountain escape.",
    image: {
      url: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "hearthstone_lodge.jpg",
    },
    price: 1800,
    location: "Revelstoke",
    country: "Canada",
  },
  {
    title: "Ivy Trail Cottage",
    description: "Charming cottage with a garden, perfect for a quiet retreat.",
    image: {
      url: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "ivy_trail.jpg",
    },
    price: 1300,
    location: "Cornwall",
    country: "UK",
  },
  {
    title: "City Spark Studio",
    description: "Compact studio in a vibrant city, great for solo travelers.",
    image: {
      url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "city_spark.jpg",
    },
    price: 1050,
    location: "Ho Chi Minh City",
    country: "Vietnam",
  },
  {
    title: "Oakwood Grove Cabin",
    description: "Secluded cabin in an oak forest, ideal for a nature escape.",
    image: {
      url: "https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "oakwood_grove.jpg",
    },
    price: 1450,
    location: "Kelowna",
    country: "Canada",
  },
  {
    title: "Portside Dusk Flat",
    description:
      "Cozy flat with harbor views, perfect for a coastal city stay.",
    image: {
      url: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "portside_dusk.jpg",
    },
    price: 1200,
    location: "Lima",
    country: "Peru",
  },
  {
    title: "Sunkissed Sands Villa",
    description: "Bright villa near the beach, great for a sunny getaway.",
    image: {
      url: "https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "sunkissed_sands.jpg",
    },
    price: 1650,
    location: "Abu Dhabi",
    country: "UAE",
  },
  {
    title: "Greenfield Farmhouse",
    description: "Spacious farmhouse in a meadow, ideal for a family vacation.",
    image: {
      url: "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "greenfield_farm.jpg",
    },
    price: 1400,
    location: "Kentucky",
    country: "USA",
  },
  {
    title: "Stone Path Loft",
    description:
      "Stylish loft in a historic district, perfect for urban explorers.",
    image: {
      url: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "stone_path.jpg",
    },
    price: 1550,
    location: "Bruges",
    country: "Belgium",
  },
  {
    title: "Soft Wave Bungalow",
    description: "Simple bungalow by the sea, great for a relaxed beach stay.",
    image: {
      url: "https://images.pexels.com/photos/331692/pexels-photo-331692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "soft_wave.jpg",
    },
    price: 1100,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Snowflake Vale Chalet",
    description:
      "Cozy chalet with snowy mountain views, ideal for a winter getaway.",
    image: {
      url: "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "snowflake_vale.jpg",
    },
    price: 1750,
    location: "Hokkaido",
    country: "Japan",
  },
  {
    title: "Warm Hearth Retreat",
    description:
      "Warm retreat with rustic charm, perfect for a countryside escape.",
    image: {
      url: "https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filename: "warm_hearth.jpg",
    },
    price: 1350,
    location: "Andalusia",
    country: "Spain",
  },
];

module.exports = sampleListings;
