maptilersdk.config.apiKey = mapConfigKey;
const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element in which the SDK will render the map
  style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
  scrollZoom: false,
});

const marker = new maptilersdk.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // [lng, lat]
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `
      <h4>${listing.location}</h4>
      <p>Exact location provided after booking</p>
      `
    )
  ) // add popup
  .addTo(map);
