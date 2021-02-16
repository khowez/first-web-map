
mapboxgl.accessToken = 'pk.eyJ1Ijoia2hvd2V6IiwiYSI6ImNrbDFkNXE0dTBsZWkydnBkMXB0MjJ2ejEifQ.TSlGl3vZSESGCLo2de5Zwg';
var map = new mapboxgl.Map({
    container: 'mapContainer', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-73.947041,40.830940], // starting position [lng, lat]
    zoom: 14 // starting zoom
})

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');



$.getJSON('./data/audubonmurals.json', function(muralDataPoints) {
  console.log(muralDataPoints)

  muralDataPoints.forEach(function(muralDataPoint) {
    console.log(muralDataPoint.muralName, muralDataPoint.artistName)

    var html = `
      <div>
      <h1 id="muralNameText">${muralDataPoint.muralName}</h1>
      <h2 id="artistNameText">By ${muralDataPoint.artistName}</h2>
      <h3 id="addressText">Found at ${muralDataPoint.address}</h3>
      <div id="muralUrlStyle"><a href="${muralDataPoint.muralUrl}" target="_blank">Learn more about this mural here</a></div>
      <img id="muralImageStyle" src="${muralDataPoint.muralImage}" />
</div>
    `

      new mapboxgl.Marker({
      color: 'purple'
    })
    .setLngLat([muralDataPoint.long, muralDataPoint.lat])
    .setPopup(new mapboxgl.Popup().setHTML(html).setMaxWidth("300px")) // add popup
    .addTo(map);

  })
})

// <div id="birdBlurbText">${muralDataPoint.birdBlurb}</div> add blurb text to pop-up
