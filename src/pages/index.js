import React from 'react'
import Layout from '../components/Layout'
import PopularTopics from '../components/PopularTopics'
import Searchbox from '../components/Searchbox'
import MediaPlayer from '../components/MediaPlayer'

const videoJsOptions = {
  autoplay: false,
  controls: true,
  responsive: true,
  sources: [{
    src: 'https://drupal.digital-hub-stage.hmpps.dsd.io/sites/default/files/videos/2019-10/Nathan%27s%20Story.mp4',
    type: 'video/mp4'
  }]
}

export default () => {
    return (
      <>
        <Layout blueBar pageNavigation={false}>
        <div className="govuk-width-container home-navigation govuk-!-margin-top-3">
          <div className="home-navigation__actions">
            <div>
              <div className="govuk-clearfix home-navigation__search">
                <Searchbox large />
              </div>
              <a href="/topics" role="button" draggable="false" className="govuk-button govuk-button--start" data-module="govuk-button">
                Browse all topics
                <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" role="presentation" focusable="false">
                  <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
                </svg>
              </a>
            </div>
            <PopularTopics />
          </div>
          <MediaPlayer { ...videoJsOptions } />
        </div>
        </Layout>
      </>
    )
}
