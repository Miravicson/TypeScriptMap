import { Mappable } from './types';
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(public divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: { lat: 0, lng: 0 },
      zoom: 1
    });
  }

  addMarker(mappableObject: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappableObject.location
    });
    
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappableObject.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    })
  }
}
