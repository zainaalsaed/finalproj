import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoaderService } from '../../../common/services/loader.service';
declare var google;

@IonicPage()
@Component({
  selector: 'night-map',
  templateUrl: 'night.html',
  providers: [LoaderService]
})
export class NightMapComponent {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(private loaderService: LoaderService, private geolocation: Geolocation) {
    this.loadMap();
  }
  loadMap() {
    this.loaderService.presentLoading();
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#242f3e"
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#746855"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#242f3e"
          }]
        }, {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#d59563"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#d59563"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#263c3f"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b9a76"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#38414e"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#212a37"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9ca5b3"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#746855"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#1f2835"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#f3d19c"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2f3948"
          }]
        }, {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#d59563"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#17263c"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#515c6d"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#17263c"
          }]
        }]
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement,
        mapOptions);
      this.loaderService.hideLoading();
      this.addMarker();
    }, (err) => {
      console.log(err);
    });
  }
  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}