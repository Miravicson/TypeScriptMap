/**
 * this defines objects that can be arguments to add marker
 */
export interface Mappable {
  location:
    | google.maps.LatLng
    | google.maps.LatLngLiteral
    | { lat: number; lng: number };
  markerContent(): string;
  color: string;
}
