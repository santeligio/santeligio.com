import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let sociRef = useRef();
  // let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/santeligio/20190818-convenzione-1858-pag1.jpg'}
          title={`Compagnia di Sant'Eligio \n Chi siamo`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Storia
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(sociRef)} to={'#values'}>
            Elenco Soci
          </ThemeLink>
          {/* <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink> */}
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              La più antica testimonianza della Compagnia di Sant'Eligio di Vernante
              risale al 5 aprile 1858, data della Convenzione sottoscritta
              da una ventina di Soci che praticavano la professione del Carrettiere
              (in dialetto Vernantese, "Cartouné").
            </p>
            <p>  
              La professione del "Cartouné" - che potremmo paragonare a quella
              del camionista dei giorni nostri, rappresentava un mestiere molto
              redditizio nella Valle Vermenagna, da sempre via di collegamento
              tra la Provincia di Cuneo e il mare.
            </p>
            <p>
              La Compagnia di Sant'Eligio e' costituita dai discendenti dei Soci Fondatori
              e si tramanda rigorosamente per linea gerarchica al discendente maschio
              più giovane.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'Soci 2024'} src={'/santeligio/2024-07-07-foto-gruppo-compagnia.jpg'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            {<h3>I Soci della Compagnia</h3>}
            {<div ref={sociRef}>
              <p>
                (Ultimo aggiornamento: 14 agosto 2024)
              </p>
              <ol>
                <li>Bertaina Mario <b>(Priore)</b></li>
                <li>Macario Gianmarco</li>
                <li>Macario Livio</li>
                <li>Macario Fulvio</li>
                <li>Macario Andrea</li>
                <li>Macario Loris</li>
                <li>Pettavino Adriana</li>
                <li>Pettavino Miriana</li>
                <li>Macario Christian</li>
                <li>Risso Francesco</li>
                <li>Pettavino Paolo</li>
                <li>Macario Gianpaolo</li>
              </ol>
              {/* <img alt={'founder'} src={'/about2.png'}></img> */}
            </div>}

            {/* <h3>Sustainability</h3> */}
            {/* <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                TODO
              </p>
              <p>
                TODO
              </p>
              <p>
                TODO
              </p>
            </div> */}
          </div>
        </Container>

        {/* <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div> */}
      </div>
    </Layout>
  );
};

export default AboutPage;
