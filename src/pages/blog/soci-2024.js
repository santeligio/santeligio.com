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
              title={"Registro della Compagnia - 2024"}
              image={'/santeligio/2024-07-07-foto-gruppo-compagnia.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Elenco Soci
                </p>

                <p className={styles.blogParagraph}>
                  Aggiornato al 14 agosto 2024
                </p>

                <p className={styles.blogParagraph}>
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
                  TODO
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
                  TODO
                </p> */}
                {/* <p className={styles.blogParagraph}>
                  TODO
                </p> */}
                {/* <p className={styles.blogParagraph}>
                  TODO
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
