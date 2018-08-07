import React, {Component} from 'react';
import PlaceInventory from './PlaceInventory';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'allplaces': [
                {
                    'name': "Binyanei ha-Umah",
                    'type': "Convention Center",
                    'latitude': 31.787019, 
                    'longitude': 35.202142,
                    'streetAddress': "Sderot Ha'uma, Jerusalem"
                },
                {
                    'name': "Cinema City",
                    'type': "Movie Theater",
                    'latitude': 31.783143,
                    'longitude': 35.203809,
                    'streetAddress': "Sderot Yitshak Rabin 10, Jerusalem, Israel"
                },
                {
                    'name': "Mahane Yehuda Market",
                    'type': "Market",
                    'latitude': 31.784840,
                    'longitude': 35.212617,
                    'streetAddress': "Etz Hayyim St 8, Jerusalem, Israel"
                },
                {
                    'name': "Sacher Park",
                    'type': "Park",
                    'latitude': 31.780630,
                    'longitude': 35.207701,
                    'streetAddress': "Sacher Park, Jerusalem, Israel"
                },
                {
                    'name': "Bloomfield Science Museum",
                    'type': "Science Museum",
                    'latitude': 31.778730,
                    'longitude': 35.200204,
                    'streetAddress': "Sderot HaMuze'onim 3, Jerusalem, Israel"
                },
                {
                    'name': "Mount Herzl",
                    'type': "Cemetary",
                    'latitude': 31.774822,
                    'longitude': 35.177794,
                    'streetAddress': "Israel Schuchman Road"
                },
                {
                    'name': "Yad Vashem",
                    'type': "Memorial/Museum",
                    'latitude': 31.774195,
                    'longitude': 35.175299,
                    'streetAddress': "Yad Vashem St"
                },
                {
                    'name': "Hadassah University Hospital",
                    'type': "Medical Center",
                    'latitude': 31.764951,
                    'longitude': 35.149418,
                    'streetAddress': "Shoshana Biran Square"
                },
                {
                    'name': "Hadassah Medical Center",
                    'type': "Hospital",
                    'latitude': 31.797497,
                    'longitude': 35.242300,
                    'streetAddress': "Sderot Churchill 8, Jerusalem"
                },
                {
                    'name': "The Hebrew University of Jerusalem",
                    'type': "University",
                    'latitude': 31.794495,
                    'longitude': 35.241571,
                    'streetAddress': "The Hebrew University, Mt. Scopus"
                }
            ],
            'map': '',
            'infowindow': '',
            'prevmarker': ''
        };

        // retain object instance when used in the function
        this.initMap = this.initMap.bind(this);
        this.openInfoWindow = this.openInfoWindow.bind(this);
        this.closeInfoWindow = this.closeInfoWindow.bind(this);
    }

    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadMapJS('https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyCu1etKTlRpHLMBW7fcjh_O5EvDSq4b6Qk&callback=initMap')
    }

    
     // Initialize the map once the google map script is loaded
     
    initMap() {      
        let self = this;

        let view = document.getElementById('map');
       /*  view.style.height = window.innerHeight + "px"; */

        let map = new window.google.maps.Map(view, {
            center: {lat: 31.7875024, lng: 35.1972497},
            zoom: 14,
            mapTypeControl: false
        });
        
        let styles = {
          default: null,
          silver: [
            {
              elementType: 'geometry',
              stylers: [{color: '#f5f5f5'}]
            },
            {
              elementType: 'labels.icon',
              stylers: [{visibility: 'off'}]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{color: '#616161'}]
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{color: '#f5f5f5'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [{color: '#bdbdbd'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#eeeeee'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#757575'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#e5e5e5'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9e9e9e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'labels.text.fill',
              stylers: [{color: '#757575'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#dadada'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#616161'}]
            },
            {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9e9e9e'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [{color: '#e5e5e5'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [{color: '#eeeeee'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#c9c9c9'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9e9e9e'}]
            }
          ],
        
          night: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],
        
          retro: [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{color: '#c9b2a6'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'geometry.stroke',
              stylers: [{color: '#dcd2be'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ae9e90'}]
            },
            {
              featureType: 'landscape.natural',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#93817c'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry.fill',
              stylers: [{color: '#a5b076'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#447530'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#f5f1e6'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{color: '#fdfcf8'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#f8c967'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#e9bc62'}]
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry',
              stylers: [{color: '#e98d58'}]
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry.stroke',
              stylers: [{color: '#db8555'}]
            },
            {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [{color: '#806b63'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.fill',
              stylers: [{color: '#8f7d77'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#ebe3cd'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{color: '#b9d3c2'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#92998d'}]
            }
          ],
        
          hiding: [
            {
              featureType: 'poi.business',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{visibility: 'off'}]
            }
          ]
        };

        // Add a style-selector control to the map.
        let styleControl = document.getElementById('style-selector-control');
        map.controls[window.google.maps.ControlPosition.BOTTOM_CENTER].push(styleControl);

        // Set the map's style to the initial value of the selector.
        let styleSelector = document.getElementById('style-selector');
        map.setOptions({styles: styles[styleSelector.value]});

        // Apply new JSON when the user selects a different style.
        styleSelector.addEventListener('change', function() {
          map.setOptions({styles: styles[styleSelector.value]});
        });

        let InfoWindow = new window.google.maps.InfoWindow();

        window.google.maps.event.addListener(InfoWindow, 'closeclick', function () {
            self.closeInfoWindow();
        });

        this.setState({
            'map': map,
            'infowindow': InfoWindow
        });

        window.google.maps.event.addDomListener(window, "resize", function () {
            let center = map.getCenter();
            window.google.maps.event.trigger(map, "resize");
            self.state.map.setCenter(center);
        });

        window.google.maps.event.addListener(map, 'click', function () {
            self.closeInfoWindow();
        });

        let allplaces = [];
        this.state.allplaces.forEach(function (place) {
            let longname = place.name + ' - ' + place.type;
            let marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(place.latitude, place.longitude),
                animation: window.google.maps.Animation.DROP,
                map: map,
                name: place.name
            });

            marker.addListener('click', toggleBounce);

            marker.addListener('click', function () {
                self.openInfoWindow(marker);
            });

            /* marker.addListener('click', function() {
              
            }); */

            function toggleBounce() {
              if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(window.google.maps.Animation.BOUNCE);
              }
            }

            place.longname = longname;
            place.marker = marker;
            place.display = true;
            allplaces.push(place);
        });
        this.setState({
            'allplaces': allplaces
        });
    }
    
    // Open the infowindow for the marker
    // @param {object} place marker
    
    openInfoWindow(marker, place) {
        this.closeInfoWindow();
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        this.setState({
            'prevmarker': marker
        });
        this.state.infowindow.setContent('Loading Data...');
        this.state.map.setCenter(marker.getPosition());
        this.state.map.panBy(0, -400);
        this.getMarkerInfo(marker, place);
        // Open the infowindow on the correct marker.
        this.state.infowindow.open(this.state.map, marker);
    }

    // Retrieve the place data from the foursquare api for the marker and display it in the infowindow
    // @param {object} place marker

    getMarkerInfo(marker, place) {
        let self = this;
        let clientId = "OF3U0N1FFUMRXGJJEQVWSHRIDATEMUAUXZD2BMHHHTXC3LDV";
        let clientSecret = "UQ5DGBYA1VSC03AEPEXJCQL3K0CQ1JO0D4T1GLDYADN1XRSK";
        let url = "https://api.foursquare.com/v2/venues/search?client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20130815&ll=" + marker.getPosition().lat() + "," + marker.getPosition().lng() + "&limit=1";
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        self.state.infowindow.setContent("Sorry data can't be loaded");
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        let place_data = data.response.venues[0];
                        let verified = '<b>Verified place: </b>' + (place_data.verified ? 'Yes' : 'No') + '<br>';
                        let checkinsCount = '<b>Number of CheckIns: </b>' + place_data.stats.checkinsCount + '<br>';
                        let usersCount = '<b>Number of Users: </b>' + place_data.stats.usersCount + '<br>';
                        let tipCount = '<b>Number of Tips: </b>' + place_data.stats.tipCount + '<br>';
                        let readMore = '<a href="https://foursquare.com/v/'+ place_data.id +'" target="_blank">Read More on Foursquare Website</a>'
                        let streetViewService = new window.google.maps.StreetViewService();
                        let radius = 50;
                        // position of the streetview image, then calculate the heading, then get a
                        // In case the status is OK, which means the pano was found, compute the
                        // panorama from that and set the options
                        function getStreetView(data, status) {
                          
                          if (status === window.google.maps.StreetViewStatus.OK) {
                            let nearStreetViewLocation = data.location.latLng;
                            let heading = window.google.maps.geometry.spherical.computeHeading(
                              nearStreetViewLocation, marker.position);
                              self.state.infowindow.setContent(/* '<img  id="pano" src="http://maps.googleapis.com/maps/api/streetview?size=250x250&location=' + marker.getPosition().lat() + ',%20' + marker.getPosition().lng() + '&sensor=false&key=AIzaSyCu1etKTlRpHLMBW7fcjh_O5EvDSq4b6Qk"/><br> */'<div id="pano"></div><div class="name">' + marker.name + '</div>' + checkinsCount + usersCount + tipCount + verified + readMore);
                              let panoramaOptions = {
                                navigationControl: true,
                                navigationControlOptions: {style: window.google.maps.NavigationControlStyle.ANDROID},
                                enableCloseButton: false,
                                addressControl: false,
                                linksControl: false,
                                position: nearStreetViewLocation,
                                pov: {
                                  heading: heading,
                                  pitch: 0
                                }
                              };
                            let pano = document.getElementById('pano');  
                            let panorama = new window.google.maps.StreetViewPanorama(
                              pano, panoramaOptions);
                              panorama.bindTo(data.location.latLng, marker);
                              panorama.setVisible(true);
                          } else {
                            self.state.infowindow.setContent('<div>' + marker.title + '</div>' +
                              '<div>No Street View Found</div>');
                          }
                        }
                        // Use streetview service to get the closest streetview image within
                        // 50 meters of the markers position
                        streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
                        
                    });
                }
            )
            .catch(function (err) {
                self.state.infowindow.setContent("Sorry data can't be loaded");
            });
    }

     // Close the infowindow for the marker
     // @param {object} place marker
    
    closeInfoWindow() {
        if (this.state.prevmarker) {
            this.state.prevmarker.setAnimation(null);
        }
        this.setState({
            'prevmarker': ''
        });
        this.state.infowindow.close();
    }

    
    // Render function of App
    
    render() {
        return (
          <div id="main-content">
            <div id="map"></div>
            
            <PlaceInventory key="100" allplaces={this.state.allplaces} openInfoWindow={this.openInfoWindow} closeInfoWindow={this.closeInfoWindow}/>
              <div id="style-selector-control"  className="map-control">
              <select id="style-selector" className="selector-control">
                <option value="night">Night mode</option>
                <option value="default">Default</option>
                <option value="silver">Silver</option>
                <option value="retro">Retro</option>
                <option value="hiding">Hide features</option>
              </select>
            </div>
          </div>  
        );
    }
}

export default App;


 // Load the google maps Asynchronously
//  @param {url} url of the google maps script

function loadMapJS(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = function () {
       alert("Google Map authorization error. Please try refreshing the page.");
    }
    ref.parentNode.insertBefore(script, ref);
}

window.gm_authFailure = function() {
  alert("google Map authorization error. Please try refreshing the page.");
}