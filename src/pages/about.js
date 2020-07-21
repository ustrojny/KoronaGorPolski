import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from 'hooks';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  const { authorName, authorUrl } = useSiteMetadata();

  return (
    <Layout pageName="about">
      <Helmet>
        <title>Info</title>
      </Helmet>
      <Container type="content">
        <h1>Korona Gór Polski</h1>
        <p>Korona gór Polski to lista 28 szczytów poszczególnych pasm górskich Polski. 
        W założeniu miała zawierać najwyższy szczyt każdego pasma.
        Istnieją pewne kontrowersje związane z określaniem granic mezoregionów.</p>
        <h2>Wykaz szczytów</h2>
        <ol>
          <li>Rysy (wierzchołek graniczny)</li>
          <li>Babia Góra</li>
          <li>Śnieżka</li>
          <li>Śnieżnik</li>
          <li>Tarnica</li>
          <li>Turbacz</li>
          <li>Radziejowa</li>
          <li>Skrzyczne</li>
          <li>Mogielica</li>
          <li>Wysoka Kopa</li>
          <li>Rudawiec</li>
          <li>Orlica</li>
          <li>Wysoka (Wysokie Skałki)</li>
          <li>Wielka Sowa</li>
          <li>Lackowa</li>
          <li>Kowadło</li>
          <li>Jagodna</li>
          <li>Skalnik</li>
          <li>Waligóra</li>
          <li>Czupel</li>
          <li>Szczeliniec Wielki</li>
          <li>Lubomir</li>
          <li>Biskupia Kopa</li>
          <li>Chełmiec</li>
          <li>Kłodzka Góra</li>
          <li>Skopiec</li>
          <li>Ślęża</li>
          <li>Łysica</li>
        </ol>
        <h2>Autor</h2>
        <p>
          <a href={authorUrl}>{ authorName }</a>
        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
