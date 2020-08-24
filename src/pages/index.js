import React from 'react';
import { Helmet } from 'react-helmet';
import { Marker, Popup } from 'react-leaflet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import VisitedPeaksList from 'components/VisitedPeaksList';
import { useDestinations } from 'hooks';


const LOCATION = {
  lat: 50.064650,
  lng: 19.7246942,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 7;

const IndexPage = () => {
  const { destinations } = useDestinations();
  destinations.sort((a, b) => a.peakNumber - b.peakNumber);
  async function mapEffect({ leafletElement: map } = {}) {
    if ( !map ) return;
  }
  
  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  function countWinterPeaks() {
    let winterPeak = 0;
    for (let i=0; i<destinations.length; i++) {
      if(destinations[i].winter===true) {
        winterPeak++;
      } 
    }
    return winterPeak;
  }
  
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Korona Gór Polski</title>
      </Helmet>

      <Map {...mapSettings} style={{ height: '55vh', width: '100%' }}> 
        { destinations.map(destination => {
          const {id, name, location, peakNumber, winter} = destination;
          const position = [location.latitude, location.longitude];
          return (
            <Marker key={id} position={position} >
              <Popup><h3 style={{textAlign: "center"}}>
              { name }
              {winter===true &&
              <img className="winter" src="/snowflake.png" width="20px" alt="zimowy szczyt"></img>
              }
              </h3>
              <img src={`/${peakNumber}.jpg`} width="180px" alt="zdjecie szczytu"/>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      
      <Container type="content" className="text-center home-start">
        <h2>Korona Gór Polski</h2>
        <h3>Odwiedzone szczyty:</h3>
        <h3>{destinations.length}/28 ({Math.round(destinations.length/28*100)}%)</h3>
        <h3>Szczyty zdobyte zimą:</h3>
        <h3>{countWinterPeaks()}</h3>
        <VisitedPeaksList />
      </Container>
    </Layout>
  );
};

export default IndexPage;
