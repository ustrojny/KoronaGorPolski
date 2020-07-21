import React from 'react';
import { Helmet } from 'react-helmet';
import { Marker, Popup } from 'react-leaflet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import { useDestinations } from 'hooks';

const LOCATION = {
  lat: 50.064650,
  lng: 19.7246942,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 7;

const IndexPage = () => {
  const { destinations } = useDestinations();
  console.log('destinations', destinations);
  async function mapEffect({ leafletElement: map } = {}) {
    if ( !map ) return;
  }
  
  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Korona Gór Polski</title>
      </Helmet>

      <Map {...mapSettings} style={{ height: '50vh', width: '100%' }}>
        { destinations.map(destination => {
          const {id, name, location} = destination;
          const position = [location.latitude, location.longitude];
          return (
            <Marker key={id} position={position}>
              <Popup>{ name }</Popup>
            </Marker>
          );
        })}
      </Map>

      <Container type="content" className="text-center home-start">
        <h2>Korona Gór Polski</h2>
        <h3>Odwiedzone szczyty</h3>
        <ul>
          { destinations.map(destination => {
            const {id, name} = destination;
            return <li key={id}>{name}</li>
          })}
        </ul>

      </Container>
    </Layout>
  );
};

export default IndexPage;
