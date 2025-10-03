import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        <span className={styles.version_badge}>
          v0.6.1
        </span>
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.eMotorSolution.description">
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={`button button--lg ${styles.xbutton}`}
            to="docs/docs/installation">
              Docs
          </Link>
          <Link
            className={`button button--lg ${styles.xbutton}`}
            to="docs/api/installation">
              API
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="eMotorSolution manual <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
