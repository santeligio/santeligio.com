import React from 'react';
import { navigate } from 'gatsby';

// import BlogPreviewGrid from '../../components/BlogPreviewGrid';
// import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

// import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';

const BlogPage = (props) => {
  // const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          // image={'/blogCover.png'}
          image={'/santeligio/wa-2024-06-10-133426-1.jpeg'}
          title={`La vecchia bandiera della Compagnia`}
          ctaLink={'leggi la storia'}
          ctaTo={'/blog/sample'}
          header={'storia'}
        />

        <div className={styles.navContainer}>
          {/* <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Tutti i Post
          </ThemeLink> */}
          <ThemeLink
            onClick={() => navigate('/blog/soci-2024')}
            to={'/blog/soci-2024'}
          >
            News
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/soci-2024')}
            to={'/blog/soci-2024'}
          >
            Anno 2024
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/soci-2023')}
            to={'/blog/soci-2023'}
          >
            Anno 2023
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Interview
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        {/* <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div> */}
      </div>
    </Layout>
  );
};

export default BlogPage;
