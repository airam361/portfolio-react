import { useEffect, useRef } from "react";

function GoogleMapComp() {
  const ref = useRef();

  useEffect(() => {
    const mapStyles = [
      { elementType: "geometry", stylers: [{ color: "#14213D" }] }, // schimbat
      { elementType: "labels.text.fill", stylers: [{ color: "#FCA311" }] }, // schimbat
      {
        elementType: "labels.text.stroke",
        stylers: [{ visibility: "off" }], //schimbat
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#14213D" }], ///schimbat
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#2A4683" }], //scimbat
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#FCA311" }],
      },
    ];

    const myLatLng = { lat: 44.9420116, lng: 26.0197085 };

    const map = new window.google.maps.Map(ref.current, {
      center: myLatLng,
      zoom: 5,
      styles: mapStyles,
      disableDefaultUI: true,
    });
   
    const pinSVGFilled =
      "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";

    const markerImage = {
      path: pinSVGFilled,
      anchor: new window.google.maps.Point(12, 17),
      fillOpacity: 1,
      fillColor: "#00ff00",
      strokeWeight: 2,
      strokeColor: "transparent",
      scale: 2,
      labelOrigin: new window.google.maps.Point(12, 9),
    };

    new window.google.maps.Marker({
      position: myLatLng,
      map,
      // icon: markerImage,
      // label: {
      //   fontFamily: "Segoe UI",
      //   color: "#ff0000",
      //   text: "B",
      // },
      // fillColor: "#ffffff",
      // title: "Hello World!",
    });
  });

  return <div style={{ width: "100%", height: "100%" }} ref={ref} id="map" />;
}

export default GoogleMapComp;
