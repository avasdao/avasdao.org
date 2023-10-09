import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
    {
        title: 'Built For The People',
        Svg: require('@site/static/img/built-for-the-people.svg').default,
        description: (
            <>
                Our aim is to build and share the means to provide a sustainable financial future for every man, woman and child in our beautiful world.
            </>
        ),
    },
    {
        title: 'Payyyouts -n- Airdrops',
        Svg: require('@site/static/img/payyouts.svg').default,
        description: (
            <>
                We ❤️ nothing more than rewarding our loyal community with exclusive $TOKEN Airdrops and multiple daily Payyyouts!
            </>
        ),
    },
    {
        title: 'Free and Open Source',
        Svg: require('@site/static/img/foss.svg').default,
        description: (
        <>
            We build from the ground up using 100% FOSS standards that promote sharing & caring across an entire ecosystem of Crypto Builders.
        </>
        ),
    },
]

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>

            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
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
    )
}
