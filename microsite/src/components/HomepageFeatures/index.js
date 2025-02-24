import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Network Data Analysis',
    Svg: require('@site/static/img/network.svg').default,
    description: (
      <>
        Select relevant information from network data to be used by the ML model.
      </>
    ),
  },
  {
    title: 'ML to improve service quality',
    Svg: require('@site/static/img/ai.svg').default,
    description: (
      <>
        An MLOps pipeline will be integrated into the network software to predict anomalies, enabling self-optimization.
        This will improve network efficiency, availability, and consistency.
      </>
    ),
  },
  {
    title: 'Implementation on 5G and Beyond-5G networks',
    Svg: require('@site/static/img/5g.svg').default,
    description: (
      <>
        Software to be implemented in the network software of telecommunications companies to improve the quality of service for their users.
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
