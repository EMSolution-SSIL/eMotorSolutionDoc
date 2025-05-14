import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({ id: 'feature.python.title' }),
    Svg: require('@site/static/img/Python.svg').default,
    description: translate({ id: 'feature.python.description' }),
  },
  {
    title: translate({ id: 'feature.easy-to-use.title' }),
    Svg: require('@site/static/img/easy.png').default,
    description: (
      translate({ id: 'feature.easy-to-use.description' })
    ),
  },
  {
    title: translate({ id: 'feature.emsolution.title' }),
    Svg: require('@site/static/img/EMSolution_icon.svg').default,
    description: (
      translate({ id: 'feature.emsolution.description' })
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof Svg === 'string' ? (
          <img src={Svg} alt={title} className={styles.featureSvg} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
