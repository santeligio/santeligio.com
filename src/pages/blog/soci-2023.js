import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'storia'}
              title={"Registro della Compagnia - 2023"}
              image={'/santeligio/santeligio_2023.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Elenco Soci
                </p>

                <p className={styles.blogParagraph}>
                  Aggiornato al 6 luglio 2024
                </p>

                <p className={styles.blogParagraph}>
                  <ol>
                    <li>Macario Gianpaolo <b>(Priore)</b></li>
                    <li>Bertaina Mario</li>
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
                  </ol>
                </p>

                {/* <p className={styles.blogParagraph}>
                  TODO
                </p>
                <div className={styles.imagesContainer}>
                  <div className={styles.imageContainer}>
                    <img
                      src={'/santeligio/santeligio_2023.jpg'}
                      alt={'sample1'}
                    />
                  </div>
                </div> */}
                {/* <p className={styles.blogParagraph}>
                  Aprendo un lembo della scatola però si rivela un indizio del
                  vero contenuto.
                </p>
                <div className={styles.imagesContainer}>
                  <div className={styles.imageContainer}>
                    <img
                      src={'/santeligio/20231125-142205.jpg'}
                      alt={'sample1'}
                    />
                  </div>
                </div> */}
                {/* <p className={styles.blogParagraph}>Continua...</p> */}
                {/* <p className={styles.blogParagraph}>
                  Delaware limited liability company (The Sydney) collects
                  personal information that you voluntarily provide when
                  applying or registering for an account with The Upside or
                  making a purchase on The Upside website; www.theupside.com
                  (the Website).
                </p> */}
                {/* <p className={styles.blogParagraph}>
                  This Privacy Policy (Privacy Policy) outlines how your
                  information is collected, used and disclosed when you access
                  or use our Services as defined in our Terms. This information
                  is collected, used and disclosed in accordance with the
                  Privacy Act 1988 (Cth) (Privacy Act).
                </p> */}
                {/* <p className={styles.blogParagraph}>
                  This Privacy Policy is incorporated by reference into our
                  Terms. Any capitalized terms not defined in this Policy are
                  defined in the Terms. You agree to comply with all Terms when
                  accessing or using our Services, including this Privacy
                  Policy.
                </p> */}
              </div>
              {/* <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={'/cloth.png'} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/collections/collection1.png'} alt={'sample2'} />
                </div>
              </div> */}
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
