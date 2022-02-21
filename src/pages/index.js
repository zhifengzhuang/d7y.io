import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Translate, { translate } from "@docusaurus/Translate"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import GitHubButton from "react-github-btn"

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <GitHubButton
            href="https://github.com/dragonflyoss/Dragonfly2"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star dragonflyoss/Dragonfly2 on GitHub"
          >
            Star
          </GitHubButton>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button href={useBaseUrl("docs/quick-start")}>
            <Translate>Get Started</Translate>
          </Button>
          <Button href={useBaseUrl("docs/")}>
            <Translate>Learn More</Translate>
          </Button>
        </div>
      </header>

      <BasicInfo />

      <main className={clsx("hero", styles.hero)}></main>

      <div className={clsx("hero", styles.hero)}>
        <div className="container text--center">
          <h3 className="hero__subtitle">
            <Translate>Dragonfly is a</Translate>{" "}
            <a href="https://cncf.io/">Cloud Native Computing Foundation</a>{" "}
            <Translate>incubating project</Translate>
          </h3>
          <div className={clsx("cncf-logo", styles.cncfLogo)} />
        </div>
      </div>
    </Layout>
  )
}

const Button = ({ children, href }) => {
  return (
    <div className="col col--2 margin-horiz--sm">
      <Link
        className="button button--outline button--primary button--lg"
        to={href}
      >
        {children}
      </Link>
    </div>
  )
}

const BasicInfo = () => (
  <div className={clsx("hero", styles.hero)}>
    <div className="container">
      <div className="row">
        <div className="col col--6">
          <h1 className={styles.basicTitle}>
            <img
              className={styles.questionIcon}
              src={useBaseUrl("img/icon/question.svg")}
              alt="question"
            />
            <Translate>What is Dragonfly?</Translate>
          </h1>
          <p className={clsx("hero__subtitle", styles.description)}>
            <Translate>
              Dragonfly is an open source intelligent P2P based image and file
              distribution system. Its goal is to tackle all distribution
              problems in cloud native scenarios. It is now hosted by the Cloud
              Native Computing Foundation (CNCF) as an Incubating Level Project.
              Originally it was born to solve all kinds of distribution at very
              large scales, such as application distribution, cache
              distribution, log distribution, image distribution, and so on.
            </Translate>
          </p>
        </div>
        <div className="col">
          <img
            className="image"
            src={useBaseUrl("img/what-is-kubevela.png")}
            align="right"
            alt="what is dragonfly"
          />
        </div>
      </div>
      <div className={clsx("row")}>
        <div className={clsx("col col--6", styles.badgeWrapper)}>
          <GitHubButton
            href="https://github.com/dragonflyoss/Dragonfly2"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star dragonflyoss/Dragonfly2 on GitHub"
          >
            Star
          </GitHubButton>
          <GitHubButton
            href="https://github.com/dragonflyoss/Dragonfly2/subscription"
            data-icon="octicon-eye"
            data-show-count="true"
            aria-label="Watch dragonflyoss/Dragonfly2 on GitHub"
          >
            Watch
          </GitHubButton>
          <GitHubButton
            href="https://github.com/dragonflyoss/Dragonfly2/fork"
            data-icon="octicon-repo-forked"
            data-show-count="true"
            aria-label="Fork dragonflyoss/Dragonfly2 on GitHub"
          >
            Fork
          </GitHubButton>
        </div>
      </div>
      <div className="row">
        <div className={clsx("col col--6", styles.badgeWrapper)}>
          <a href="https://github.com/dragonflyoss/Dragonfly2/releases/">
            <img src="https://img.shields.io/github/release/dragonflyoss/Dragonfly2.svg" />
          </a>
          <a href="https://www.cncf.io/projects/">
            <img src="https://img.shields.io/badge/CNCF%20Status-Incubating-informational" />
          </a>
        </div>
      </div>
    </div>
  </div>
)
