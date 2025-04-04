import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Everything in Python',
    Svg: require('@site/static/img/Python.svg').default,
    description: (
      <>
        eMotorSolution is built on top of Python, a powerful and flexible programming language that is widely used in the engineering community.
        This allows users to easily integrate eMotorSolution into their existing workflows and use it in conjunction with other Python libraries and tools.
        The software provides a wide range of features and tools that allow users to quickly and easily design and optimize electric machines.
        The Python interface is intuitive and easy to use, making it accessible to users of all skill levels.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/slice-of-cake.svg').default,
    description: (
      <>
        eMotorSolution is designed to be user-friendly and easy to use, with a focus on providing a seamless user experience.
        You can start using it right away without any prior knowledge of electric machines.
        The user interface is intuitive and easy to navigate, making it accessible to users of all skill levels.
        The software provides a wide range of features and tools that allow users to quickly and easily design and optimize electric machines.
      </>
    ),
  },
  {
    title: 'Powered by EMSolution',
    Svg: require('@site/static/img/EMSolution_icon.svg').default,
    description: (
      <>
        Simulation and optimization of electric machines is requires complex and efficient computations.
        eMotorSolution is powered by EMSolution, a powerful and efficient simulation engine that can handle computational electromagnetics efficiently, accurately, and quickly.
        EMSolution is a powerful simulation engine that can handle complex simulations with ease.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
