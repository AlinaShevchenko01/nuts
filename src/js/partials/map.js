import L from "leaflet";
import "leaflet/dist/leaflet.css";

import customIconUrl from "/svg/place-holder.svg";

export async function initMap() {
  const mapElement = document.querySelector("#map");
  const mapLat = 46.43148;
  const mapLng = 30.71528;
  const mapZoom = 14;

  const customIcon = L.icon({
    iconUrl: customIconUrl,
    iconSize: [49, 49],
    iconAnchor: [24, 49],
  });

  const map = L.map(mapElement).setView([mapLat, mapLng], mapZoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  L.marker([mapLat, mapLng], { icon: customIcon }).addTo(map);
}
