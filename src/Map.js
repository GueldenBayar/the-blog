import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect, useCallback } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import toast from "toast-me";
import axios from "axios";
import { render } from "@testing-library/react";

const Map = ({ posts, searchQuery }) => {
  const [mapCenter, setMapCenter] = useState();
  const [zoom, setZoom] = useState();
  let { path } = useRouteMatch();
  searchQuery = "Berlin";

  /////////////////////
  // Helper functions//
  //////////////////////

  // get coordinates of map center for user search
  const getSearchLocation = useCallback(
    async (searchQuery) => {
      try {
        // format search query here
        const { data: location } = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`
        );
        // use first hit as location
        setMapCenter([location[0].lat, location[0].lon]);
      } catch (e) {
        console.log(e);
      }
    },
    [searchQuery]
  );

  // get coordinates of map center based on browser location for landing page view

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      toast("Geolocation is not supported by your browser", {
        toastClass: "toast",
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setZoom(13);
          setMapCenter([position.coords.latitude, position.coords.longitude]);
        },
        () => toast("Unable to retrieve your location")
      );
    }
  }, []);

  // get coordinates of map center for single post view
  const getPostLocation = useCallback(
    (posts) => {
      posts.forEach((post) => {
        if (post.fields.location?.lat) {
          setMapCenter([post.fields.location.lat, post.fields.location.lon]);
        } else {
          getCurrentLocation();
          toast("No coordinates for blog post, showing tables in your area");
        }
      });
    },
    [posts]
  );

  // render list of markers
  const renderMarkers = (posts) => {
    return posts.map((post) => {
      if (post.fields?.location) {
        const key = post.sys.id;
        const coordinates = [
          post.fields.location.lat,
          post.fields.location.lon,
        ];
        const popUpText = post.fields.title;
        return (
          <Marker key={key} position={coordinates}>
            <Popup>{popUpText}</Popup>
          </Marker>
        );
      }
    });
  };

  useEffect(() => {
    // set map center and markers based on current path
    if (path === "/") {
      // if on landing page path, use browser based location
      getCurrentLocation();
    } else if (path.includes("post")) {
      // if in single post view, use post location
      getPostLocation(posts);
      setZoom(16);
    } else if (path.includes("search")) {
      // if in searcg view, use search query location
      getSearchLocation(searchQuery);
    }
  }, [getCurrentLocation, getSearchLocation, getPostLocation]);

  return (
    <>
      {mapCenter && (
        <MapContainer center={mapCenter} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapCenter}>
            <Popup>You are here</Popup>
          </Marker>
          {posts && renderMarkers(posts)}
        </MapContainer>
      )}
    </>
  );
};

export default Map;
