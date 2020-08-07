import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from 'hooks';

import Layout from 'components/Layout';
import Container from 'components/Container';
import { useDestinations } from 'hooks';

const SecondPage = () => {
  const { authorName, authorUrl } = useSiteMetadata();
  const { destinations } = useDestinations();     
  const allPeaks = 
  [
    "Rysy (2499)",
    "Babia Góra (1725)",
    "Śnieżka (1602)",
    "Śnieżnik (1425)",
    "Tarnica (1346)",
    "Turbacz (1310)",
    "Radziejowa (1262)",
    "Skrzyczne (1257)",
    "Mogielica (1171)",
    "Wysoka Kopa (1126)",
    "Rudawiec (1106)",
    "Orlica (1084)",
    "Wysoka (1050)",
    "Wielka Sowa (1015)",
    "Lackowa (997)",
    "Kowadło (988)",
    "Jagodna (977)",
    "Skalnik (945)",
    "Waligóra (936)",
    "Czupel (933)",
    "Szczeliniec Wielki (919)",
    "Lubomir (904)",
    "Biskupia Kopa (889)",
    "Chełmiec (851)",
    "Kłodzka Góra (765)",
    "Skopiec (724)",
    "Ślęża (718)",
    "Łysica (612)"
  ];
  const visitedPeaks=destinations.map(x=>x.name);
  
  return (
    <Layout pageName="about">
      <Helmet>
        <title>Info</title>
      </Helmet>
      <Container type="content">
        <h1>Korona Gór Polski</h1>
        <p>Korona gór Polski to lista 28 szczytów poszczególnych pasm górskich Polski. 
        W założeniu miała zawierać najwyższy szczyt każdego pasma.
        Istnieją pewne kontrowersje związane z określaniem granic mezoregionów, dlatego według różnych źródeł lista może wyglądać nieco inaczej. Poniżej lista szczytów według Klubu Zdobywców Korony Gór Polski. Kolorem zielonym oznaczone zostały odwiedzone przeze mnie szczyty</p>
        <h2>Wykaz szczytów</h2>
        <ol>
          { allPeaks.map(peak => {
            if (visitedPeaks.indexOf(peak) > -1) {
              return <li style={{color: 'green'}} key={peak}>{peak}</li>
            } else {
              return <li key={peak}>{peak}</li>
            }
          })}
        </ol>
        <p style={{color: 'green'}}>*Odwiedzony szczyt*</p>
        <p>**Szczyt do zdobycia**</p>
        <h2>Autor</h2>
        <p>
          <a href={authorUrl}>{ authorName }</a>
        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
